/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"

import Footer from "./Footer/Footer"

import "./layout.css"

import styled from "styled-components"

const OuterPageContainer = styled.div`
  margin: 0 auto;
  position: relative;
  overflow-y: hidden;
`

const FooterContainer = styled.footer`
  margin-top: 2rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Navigation {
      prismicNavigation {
        data {
          cta_button {
            url
            slug
            id
          }
          cta_button_text
          nav_links {
            link_title
            page_link {
              url
              slug
              id
            }
          }
          nav_logo {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
      }

      prismicFooter {
        data {
          footer_logo {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
          footer_text {
            richText
          }
        }
      }
    }
  `)

  return (
    <>
      <OuterPageContainer>
        <Header
          logo={data.prismicNavigation.data.nav_logo}
          nav_links={data.prismicNavigation.data.nav_links}
          cta_button={{
            cta_label: data.prismicNavigation.data.cta_button_text,
            cta_link: data.prismicNavigation.data.cta_button.url,
          }}
        />
        <main>{children}</main>
        <Footer
          logo={data.prismicFooter.data.footer_logo}
          copyright_text={data.prismicFooter.data.footer_text}
        />
      </OuterPageContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
