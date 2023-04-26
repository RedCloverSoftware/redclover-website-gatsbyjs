import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import SocialIconLink from "./SocialIconLink"

const mockSocial = {
  social: {
    name: "John Doe",
    service: "Twitter",
    serviceurl: "twitter.com/",
    account: "johndoe",
    iconimgsrc: "mockIconSrc",
  },
}

describe("SocialIconLink", () => {
  beforeEach(() => {
    render(<SocialIconLink {...mockSocial} />)
  })

  it("renders social icon image with correct alt text", () => {
    const socialIcon = screen.getByAltText("John Doe's Twitter")
    expect(socialIcon).toBeInTheDocument()
    expect(socialIcon).toHaveAttribute("src", "mockIconSrc")
  })

  it("renders social icon image with correct width", () => {
    const socialIcon = screen.getByAltText("John Doe's Twitter")
    expect(socialIcon).toHaveAttribute("width", "75px")
  })

  it("renders social icon link with correct href", () => {
    const socialIconLink = screen.getByRole("link", { name: "John Doe's Twitter" })
    expect(socialIconLink).toBeInTheDocument()
    expect(socialIconLink).toHaveAttribute("href", "https://twitter.com/johndoe")
  })
})
