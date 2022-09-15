import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/HeroSection/HeroSection"
import ServicePointsSection from "../components/ServicePointsSection/ServicePointsSection"
import AboutUsSection from "../components/AboutUsSection/AboutUsSection"
import TeamSection from "../components/TeamSection/TeamSection"
import StepsChartSection from "../components/StepsChartSection/StepsChartSection"
import ContactSection from "../components/ContactSection/ContactSection"

const IndexPage = ({ data }) => {
  if (!data) return null
  const home = data.prismicHomePage

  return (
    <Layout>
      <Seo
        title={home.data.page_title.text}
        description={home.data.page_description.text}
      />

      <HeroSection
        primary_heading={home.data.hero_primary_heading.richText[0].text}
        primary_paragraph={home.data.hero_primary_paragraph.richText[0].text}
      />
      <ServicePointsSection
        id="services"
        primary_heading={home.data.services_primary_heading.richText[0].text}
        services={home.data.service_section_service_points}
      />
      <AboutUsSection
        id="about-us"
        featured_image={home.data.aboutus_featured_image}
        primary_heading={home.data.aboutus_primary_heading.richText[0].text}
        primary_paragraph={home.data.aboutus_primary_paragraph.richText[0].text}
        secondary_heading={home.data.aboutus_secondary_heading.richText[0].text}
        secondary_paragraph={
          home.data.aboutus_secondary_paragraph.richText[0].text
        }
      />
      <TeamSection
        primary_heading={home.data.team_primary_heading.richText[0].text}
        primary_paragraph={home.data.team_primary_paragraph.richText}
      />
      <StepsChartSection
        id="our-approach"
        primary_heading={home.data.process_primary_heading.richText[0].text}
        primary_paragraph={home.data.process_primary_paragraph.richText[0].text}
        process_steps={home.data.process_steps}
      />
      <ContactSection
        primary_heading={home.data.contact_primary_heading.richText[0].text}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    prismicHomePage {
      data {
        contact_primary_heading {
          richText
        }
        footer_copyright_text {
          richText
        }

        hero_primary_heading {
          richText
        }
        services_primary_heading {
          richText
        }
        hero_primary_paragraph {
          richText
        }

        service_section_service_points {
          service_point_icon {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          service_point_heading {
            text
          }
          service_point_paragraph {
            text
          }
          service_point_cta_link {
            url
          }
        }

        aboutus_featured_image {
          url
          alt
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }

        aboutus_primary_heading {
          richText
        }
        aboutus_primary_paragraph {
          richText
        }

        aboutus_secondary_heading {
          richText
        }
        aboutus_secondary_paragraph {
          richText
        }

        team_primary_heading {
          richText
        }
        team_primary_paragraph {
          richText
        }

        process_primary_heading {
          richText
        }
        process_primary_paragraph {
          richText
        }

        process_steps {
          procstep_image {
            alt
            localFile {
              publicURL
            }
          }

          procstep_primary_step_title {
            richText
          }
          procstep_step_paragraph {
            richText
          }
        }

        cta_button_link {
          url
        }

        page_title {
          richText
        }

        page_description {
          richText
        }
      }
    }
  }
`
