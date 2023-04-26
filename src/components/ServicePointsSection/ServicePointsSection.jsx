import React from "react"

import {
  OuterContainer,
  InnerContainer,
  SectionTitle,
} from "./ServicePointsSection.styled.js"

import ServicePoint from "./ServicePoint"

const ServicePointsSection = props => {
  return (
    <OuterContainer id="services">
      <SectionTitle>{props.primary_heading}</SectionTitle>
      <InnerContainer>
        {props.services && props.services.map((currentService, i) => (
          <ServicePoint service={currentService} key={i} />
        ))}
      </InnerContainer>
    </OuterContainer>
  )
}

export default ServicePointsSection
