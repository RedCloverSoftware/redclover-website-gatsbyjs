import React from "react"

import { OuterContainer, InnerContainer } from "./AboutUsSection.styled.js"

const AboutUsSection = props => {
  return (
    <OuterContainer id="about-us">
      <InnerContainer>
        <div id="aboutus-section-body">
          <h2>{props.primary_heading}</h2>
          <p>{props.primary_paragraph}</p>

          <div>
            <img
              src={props.featured_image.url}
              alt={props.featured_image.alt}
            />
          </div>

          <h2>{props.secondary_heading}</h2>
          <p>{props.secondary_paragraph}</p>
        </div>
      </InnerContainer>
    </OuterContainer>
  )
}

export default AboutUsSection
