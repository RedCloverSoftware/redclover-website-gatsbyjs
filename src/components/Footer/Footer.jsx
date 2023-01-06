import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { OuterContainer, InnerContainer } from "./Footer.styled.js"
import { PrismicRichText } from "@prismicio/react"

const Footer = ({ logo, copyright_text }) => {
  return (
    <OuterContainer>
      <InnerContainer>
        <div>
          <a
            href="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <GatsbyImage
              image={getImage(logo.localFile.childImageSharp)}
              width={321}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt={logo.alt}
            />
          </a>
        </div>
        <PrismicRichText field={copyright_text.richText} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default Footer
