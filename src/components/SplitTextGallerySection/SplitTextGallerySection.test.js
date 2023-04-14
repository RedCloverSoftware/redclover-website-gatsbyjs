import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import SplitTextGallerySection from "./SplitTextGallerySection"

const mockProps = {
  imageleft: true,
  featured_image: {
    url: "mockImageUrl",
  },
  gradient: "linear-gradient(to right, #f5f5f5, #ffffff)",
  primary_heading: "Test Heading",
  primary_paragraph: "Test Paragraph",
}

describe("SplitTextGallerySection", () => {
  beforeEach(() => {
    render(<SplitTextGallerySection {...mockProps} />)
  })

  it("renders image with correct src and alt attributes", () => {
    const image = screen.getByAltText("")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "mockImageUrl")
  })

  it("renders primary heading", () => {
    const primaryHeading = screen.getByText("Test Heading")
    expect(primaryHeading).toBeInTheDocument()
  })

  it("renders primary paragraph", () => {
    const primaryParagraph = screen.getByText("Test Paragraph")
    expect(primaryParagraph).toBeInTheDocument()
  })

  it("renders image and text containers in correct order when imageleft is true", () => {
    const image = screen.getByAltText("")
    const primaryHeading = screen.getByText("Test Heading")
    expect(image).toBeInTheDocument()
    expect(primaryHeading).toBeInTheDocument()
    expect(image.compareDocumentPosition(primaryHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })
})
