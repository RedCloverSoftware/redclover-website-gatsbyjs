import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { OuterContainer, InnerContainer } from "./ServicePoint.styled.js"

const ServicePointsSection = props => {
  const icon = getImage(props.service.service_point_icon.localFile)

  return (
    <OuterContainer>
      <InnerContainer>
        <GatsbyImage
          width="100%"
          height="5rem"
          image={icon}
          alt={props.service.service_point_icon.alt}
        />
        <h3>{props.service.service_point_heading.text}</h3>
        <p>{props.service.service_point_paragraph.text}</p>
      </InnerContainer>
    </OuterContainer>
  )
}

export default ServicePointsSection
