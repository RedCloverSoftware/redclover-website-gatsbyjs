import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ServicePoint from "./ServicePoint"

jest.mock("gatsby-plugin-image", () => ({
  ...jest.requireActual("gatsby-plugin-image"),
  getImage: jest.fn().mockReturnValue({
    src: "mockedImageSrc",
    images: { fallback: { src: "mockedImageSrc" } },
    layout: "fixed",
  }),
}))


const mockService = {
  service: {
    service_point_icon: {
      localFile: {},
      alt: "Test Icon Alt",
    },
    service_point_heading: {
      text: "Test Heading",
    },
    service_point_paragraph: {
      text: "Test Paragraph",
    },
    service_point_cta_link: {
      url: "https://example.com",
    },
  },
}

describe("ServicePoint", () => {
  beforeEach(() => {
    render(<ServicePoint {...mockService} />)
  })

  it("renders service point icon with correct alt text", () => {
    expect(screen.getByAltText("Test Icon Alt")).toBeInTheDocument()
  })

  it("renders service point heading", () => {
    expect(screen.getByText("Test Heading")).toBeInTheDocument()
  })

  it("renders service point paragraph", () => {
    expect(screen.getByText("Test Paragraph")).toBeInTheDocument()
  })

  it("renders CTA button with correct URL", () => {
    const ctaButton = screen.getByRole("link", { name: "More Info" })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute("href", "https://example.com")
  })
})
