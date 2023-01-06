import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"
import { DeviceFrameset } from "react-device-frameset"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ContactSection from "../components/ContactSection/ContactSection"
import GradientHeroSection from "../components/GradientHeroSection/GradientHeroSection.styled.js"
import {
  PortfolioGallery,
  PortfolioItemSummary,
  PortfolioFeatured,
} from "../components/PortfolioPage/PortfolioPage.styled.js"

const Portfolio = ({ data }) => {
  const [hoverIndex, setCurrentHoverIndex] = useState(-1)

  useEffect(() => {}, [hoverIndex])

  function hoverPortfolioItem(i) {
    setCurrentHoverIndex(i)
  }

  if (!data) return null
  const page_data = data.prismicPortfolioPage

  return (
    <Layout>
      <GradientHeroSection>
        <PrismicRichText field={page_data.data.page_header.richText} />
      </GradientHeroSection>

      <div>
        {page_data.data.body.map(section => {
          switch (section.slice_type) {
            case "portfolio_item":
              return (
                <PortfolioFeatured key={section.id}>
                  <GatsbyImage
                    imgStyle={{
                      height: "100%",
                      margin: "0 auto",
                      objectFit: "contain",
                      imageRendering: "auto",
                    }}
                    image={getImage(
                      section.primary.portfolio_item_screenshot.localFile
                        .childImageSharp
                    )}
                    alt={section.primary.portfolio_item_screenshot.alt}
                  />

                  <div className="featured-summary">
                    <PrismicRichText field={section.primary.summary.richText} />
                  </div>
                </PortfolioFeatured>
              )
            case "portfolio_gallery":
              return (
                <PortfolioGallery key={section.id}>
                  {section.items.map((portfolio_item, index) => (
                    <a
                      key={portfolio_item.link_to_website.url.replace(
                        /[^\w\s]/gi,
                        ""
                      )}
                      style={{ display: "flex", flexFlow: "column nowrap" }}
                      href={portfolio_item.link_to_website.url}
                    >
                      <DeviceFrameset
                        onMouseEnter={() => hoverPortfolioItem(index)}
                        onMouseLeave={() => hoverPortfolioItem(-1)}
                        device="iPhone X"
                        color="gold"
                      >
                        <div>
                          <GatsbyImage
                            imgStyle={{
                              height: "100%",
                              objectFit: "cover",
                              imageRendering: "auto",
                            }}
                            image={getImage(
                              portfolio_item.gallery_item_image.localFile
                                .childImageSharp
                            )}
                            alt={portfolio_item.gallery_item_image.alt}
                          />
                        </div>
                      </DeviceFrameset>
                      <PortfolioItemSummary
                        is_hovered={hoverIndex === index ? true : false}
                      >
                        <div>
                          <PrismicRichText
                            field={portfolio_item.portfolio_summary.richText}
                          />
                        </div>
                      </PortfolioItemSummary>
                    </a>
                  ))}
                </PortfolioGallery>
              )
          }
        })}
      </div>

      <ContactSection primary_heading={page_data.data.contact_cta_text.text} />
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query PortfolioQuery {
    prismicPortfolioPage {
      data {
        page_header {
          richText
        }
        body {
          ... on PrismicPortfolioPageDataBodyPortfolioItem {
            slice_type
            id
            primary {
              cta_link {
                url
              }
              portfolio_item_screenshot {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
              summary {
                richText
              }
            }
          }
          ... on PrismicPortfolioPageDataBodyPortfolioGallery {
            slice_type
            id
            items {
              gallery_item_image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
              link_to_website {
                url
              }
              portfolio_summary {
                richText
              }
            }
          }
        }
        contact_cta_text {
          text
        }
        contact_cta_link {
          url
        }
      }
    }
  }
`
