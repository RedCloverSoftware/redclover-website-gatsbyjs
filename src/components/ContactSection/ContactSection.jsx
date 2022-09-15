import React from "react"

import CTAButton from "../CTAButton/CTAButton.styled.js"

import {
  OuterContainer,
  InnerContainer,
  SectionTitle,
} from "./ContactSection.styled.js"

const ContactSection = props => {
  return (
    <OuterContainer gradient={props.gradient}>
      <img src="/pink-bg-tri.svg" />

      <InnerContainer>
        <SectionTitle>{props.primary_heading}</SectionTitle>
        <CTAButton>
          <a href="mailto:frontdesk@redcloversoftware.ca">CONTACT US!</a>
        </CTAButton>
      </InnerContainer>

      <img src="/blue-bg-tri.svg" />
    </OuterContainer>
  )
}

export default ContactSection
