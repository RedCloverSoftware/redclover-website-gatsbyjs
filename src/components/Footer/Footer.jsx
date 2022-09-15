import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { OuterContainer, InnerContainer, HeaderLogo } from "./Footer.styled.js"

const Footer = props => {
  return (
    <OuterContainer>
      <InnerContainer>
        <HeaderLogo>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <StaticImage
              src="../../images/Logo.png"
              width={321}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt={"Logo for Red Clover Software Services Inc."}
            />
          </Link>
        </HeaderLogo>

        <span>© 2022 Red Clover Software Services Inc.</span>
        <span>
          Contact:{" "}
          <a href="mailto:frontdesk@redcloversoftware.ca">
            frontdesk@redcloversoftware.ca
          </a>
        </span>
      </InnerContainer>
    </OuterContainer>
  )
}

export default Footer
