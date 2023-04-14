import React, { useState, useEffect } from "react"
import { DeviceFrameset } from "react-device-frameset"

import CTAButton from "../CTAButton/CTAButton.styled.js"
import {
  HeroOuterContainer,
  HeroInnerContainer,
  HeroTextContentBlock,
} from "./HeroSection.styled.js"

import PortfolioTopItems from "../../images/portfolio/portfoliotopitems.webp"

const HeroSection = props => {
  const [mockupDevicePosition, setMockupDevicePosition] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    setTimeout(
      () =>
        mockupDevicePosition >= 100
          ? setMockupDevicePosition(0)
          : setMockupDevicePosition(mockupDevicePosition + 20),
      5000
    )
  }, [mockupDevicePosition])

  return (
    <HeroOuterContainer role="banner">
      <HeroTextContentBlock>
        <h1>{props.primary_heading}</h1>
        <p>{props.primary_paragraph}</p>
        <CTAButton>
          <a href="mailto:frontdesk@redcloversoftware.ca">CONTACT US!</a>
        </CTAButton>
      </HeroTextContentBlock>

      <DeviceFrameset
        id="device-mockups"
        device="iPhone X"
        color="gold"
        portrait="true"
      >
        <div>
          <img
            style={{
              height: "100%",
              objectFit: "cover",
              objectPosition: `${mockupDevicePosition}%`,
              imageRendering: "auto",
            }}
            src={PortfolioTopItems}
            alt={
              "A sheet of examples of websites built by Red Clover Software Services Inc."
            }
          />
        </div>
      </DeviceFrameset>
    </HeroOuterContainer>
  )
}

export default HeroSection
