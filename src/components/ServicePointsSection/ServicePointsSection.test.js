import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ServicePointsSection from "./ServicePointsSection";

const mockProps = {
  primary_heading: "Our Services",
  services: [
    {
      service_point_icon: {
        localFile: "test-image",
        alt: "Test Icon",
      },
      service_point_heading: {
        text: "Test Heading",
      },
      service_point_paragraph: {
        text: "Test Paragraph",
      },
      service_point_cta_link: {
        url: "https://www.example.com/more-info",
      },
    },
  ],
};

describe("ServicePointsSection", () => {
  test("renders component with provided data", () => {
    render(<ServicePointsSection {...mockProps} />);

    const sectionTitleElement = screen.getByText("Our Services");
    const servicePointComponent = screen.getByText("Test Heading");

    expect(sectionTitleElement).toBeInTheDocument();
    expect(servicePointComponent).toBeInTheDocument();
  });
});
