import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import CTAButton from "../CTAButton/CTAButton.styled.js"
import {
  HeaderOuterWrapper,
  DesktopHeaderContainer,
  HeaderInnerContainer,
  HeaderLogo,
  HeaderLinks,
  MobileHeaderContainer,
  MobileMenu,
  MobileMenuLinks,
} from "./Header.styled.js"

const Header = ({ siteTitle }) => {
  const [toggleMenu, setMenuToggle] = React.useState(false)

  return (
    <HeaderOuterWrapper>
      <DesktopHeaderContainer>
        <HeaderInnerContainer>
          <HeaderLogo>
            <a href="/">
              <StaticImage
                src="../../images/Logo.png"
                width={321}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={"Logo for Red Clover Software Services Inc."}
              />
            </a>
          </HeaderLogo>
          <HeaderLinks>
            <a href="#services">Services</a>
            <a href="#about-us">About Us</a>
            <a href="#our-approach">Our Approach</a>
          </HeaderLinks>

          <CTAButton>
            <a href="mailto:frontdesk@redcloversoftware.ca">Get a Quote!</a>
          </CTAButton>
        </HeaderInnerContainer>
      </DesktopHeaderContainer>

      <MobileHeaderContainer>
        <HeaderInnerContainer>
          <HeaderLogo>
            <a href="/">
              <StaticImage
                src="../../images/Logo.png"
                width={480}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Red Clover Software Services Inc, Logo"
              />
            </a>
          </HeaderLogo>
        </HeaderInnerContainer>

        {/*
          <button id="mobile-menu-open" onClick={ () => { setMenuToggle(true); } }>
            <svg id="mobile-menu-btn" viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>

          <MobileMenu id="mobile-menu" className={`${toggleMenu ? 'make-menu-open' : 'make-menu-close'}`}>
            <button id="mobile-menu-close" onClick={ () => { setMenuToggle(false); } }>
              <svg id="mobile-menu-btn" viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </button>
            <MobileMenuLinks>
              <a href="#services">Services</a>
              <a href="#about-us">About Us</a>
              <a href="#our-approach">Our Approach</a>
            </MobileMenuLinks>
          </MobileMenu>
      
          */}
      </MobileHeaderContainer>
    </HeaderOuterWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
