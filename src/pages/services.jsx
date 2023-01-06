import React from "react"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import CTAButton from "../components/CTAButton/CTAButton.styled.js"
import ContactSection from "../components/ContactSection/ContactSection"
import GradientHeroSection from "../components/GradientHeroSection/GradientHeroSection.styled.js"
import {
  SubServiceSection,
  SubServiceTextBlock,
} from "../components/ServiceParentPage/ServiceParentPage.styled.js"

const Services = ({ data }) => {
  if (!data) return null
  const page_data = data.prismicServiceParentPage

  return (
    <Layout>
      <GradientHeroSection>
        <PrismicRichText field={page_data.data.page_title.richText} />
      </GradientHeroSection>

      <div>
        {page_data.data.body.map(service_section => {
          switch (service_section.slice_type) {
            case "service_sub-page":
              return (
                <SubServiceSection>
                  <GatsbyImage
                    image={getImage(
                      service_section.primary.subpage_image.localFile
                        .childImageSharp
                    )}
                    alt={service_section.primary.subpage_image.alt}
                  />

                  <SubServiceTextBlock>
                    <PrismicRichText
                      field={service_section.primary.subpage_title.richText}
                    />
                    <PrismicRichText
                      field={service_section.primary.subpage_summary.richText}
                    />

                    <CTAButton>
                      <a href={service_section.primary.subpage_link.url}>
                        MORE DETAILS
                      </a>
                    </CTAButton>
                  </SubServiceTextBlock>
                </SubServiceSection>
              )
          }
        })}
      </div>

      <ContactSection primary_heading={page_data.data.contact_cta_text.text} />
    </Layout>
  )
}

export default Services

export const pageQuery = graphql`
  query ServicesParent {
    prismicServiceParentPage {
      data {
        contact_cta_text {
          text
        }
        contact_cta_link {
          url
        }
        page_title {
          richText
        }
        hero_section_overview {
          richText
        }
        body {
          ... on PrismicServiceParentPageDataBodyServiceSubPage {
            id
            slice_type
            slice_label
            primary {
              subpage_title {
                richText
              }
              subpage_summary {
                richText
              }
              subpage_link {
                url
              }
              subpage_image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                alt
              }
            }
          }
        }
      }
    }
  }
`
