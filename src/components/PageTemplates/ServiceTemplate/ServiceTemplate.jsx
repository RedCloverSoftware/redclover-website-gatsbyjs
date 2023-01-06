import React from "react"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"

import Layout from "../../layout"
import ContactSection from "../../ContactSection/ContactSection"
import GradientHeroSection from "../../GradientHeroSection/GradientHeroSection.styled.js"

const ServiceTemplate = ({ data }) => {
  if (!data) return null
  const page_data = data.prismicServicePage

  return (
    <Layout>
      <GradientHeroSection>
        <PrismicRichText field={page_data.data.page_title.richText} />
      </GradientHeroSection>

      <section>
        {page_data.data.body.map(body_section => {
          return (
            <PrismicRichText field={body_section.primary.text_block.richText} />
          )
        })}
      </section>

      <ContactSection primary_heading={page_data.data.contact_cta_text.text} />
    </Layout>
  )
}

export default ServiceTemplate

export const pageQuery = graphql`
  query SubServicePageQuery($id: String!) {
    prismicServicePage(id: { eq: $id }) {
      data {
        page_title {
          richText
        }
        body {
          ... on PrismicServicePageDataBodyPrimaryContentBlock {
            id
            primary {
              text_block {
                richText
              }
            }
            slice_type
            slice_label
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
