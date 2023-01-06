import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import CTAButton from "../CTAButton/CTAButton.styled.js"
import {
  HeaderOuterWrapper,
  DesktopHeaderContainer,
  HeaderInnerContainer,
  HeaderLinks,
  MobileHeaderContainer,
  MobileMenu,
  MobileMenuLinks,
} from "./Header.styled.js"

const Header = ({ logo, nav_links, cta_button }) => {
  const [toggleMenu, setMenuToggle] = React.useState(false)

  return (
    <HeaderOuterWrapper>
      <DesktopHeaderContainer>
        <HeaderInnerContainer>
          <div>
            <a href="/">
              <GatsbyImage
                image={getImage(logo.localFile.childImageSharp)}
                width={321}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={logo.alt}
              />
            </a>
          </div>
          <HeaderLinks>
            {nav_links.map(link => {
              return <a href={link.page_link.url}>{link.link_title}</a>
            })}
          </HeaderLinks>

          <CTAButton>
            <a href={cta_button.cta_link}>{cta_button.cta_label}</a>
          </CTAButton>
        </HeaderInnerContainer>
      </DesktopHeaderContainer>

      <MobileHeaderContainer>
        <HeaderInnerContainer>
          <div>
            <a href="/">
              <GatsbyImage
                image={getImage(logo.localFile.childImageSharp)}
                width={321}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={logo.alt}
              />
            </a>
          </div>
        </HeaderInnerContainer>

        <button
          id="mobile-menu-open"
          onClick={() => {
            setMenuToggle(true)
          }}
        >
          <svg id="mobile-menu-btn" viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>

        <MobileMenu
          id="mobile-menu"
          className={`${toggleMenu ? "make-menu-open" : "make-menu-close"}`}
        >
          <button
            id="mobile-menu-close"
            onClick={() => {
              setMenuToggle(false)
            }}
          >
            <svg
              id="mobile-menu-btn"
              viewBox="0 0 100 80"
              width="40"
              height="40"
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
          <MobileMenuLinks>
            {nav_links.map(link => {
              return <a href={link.page_link.url}>{link.link_title}</a>
            })}
          </MobileMenuLinks>
        </MobileMenu>
      </MobileHeaderContainer>
    </HeaderOuterWrapper>
  )
}

export default Header
