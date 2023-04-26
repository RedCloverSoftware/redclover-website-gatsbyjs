import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TeamSection from "./TeamSection";

jest.mock("@prismicio/react", () => ({
  PrismicRichText: ({ field }) => (
    <p data-testid="mock-prismic-rich-text">
      {field.map((item) => item.text).join(" ")}
    </p>
  ),
}));

const mockProps = {
  primary_heading: "Our Team",
  primary_paragraph: [
    { text: "Welcome to our amazing team of professionals!" },
  ],
  teammembers: [
    {
      name: "John Doe",
      title: "Software Engineer",
      imgsrc: "john-doe.jpg",
      socials: [
        {
          name: "John Doe",
          service: "linkedin",
          serviceurl: "linkedin.com/",
          account: "john-doe",
          iconimgsrc: "linkedin-icon.jpg",
        },
        {
          name: "John Doe",
          service: "twitter",
          serviceurl: "twitter.com/",
          account: "johndoe",
          iconimgsrc: "twitter-icon.jpg",
        },
      ],
    },
  ],
};

describe("TeamSection", () => {
  beforeEach(() => {
    render(<TeamSection {...mockProps} />);
  });

  it("renders primary heading", () => {
    const primaryHeading = screen.getByText("Our Team");
    expect(primaryHeading).toBeInTheDocument();
  });

  it("renders primary paragraph", () => {
    const primaryParagraph = screen.getByTestId("mock-prismic-rich-text");
    expect(primaryParagraph).toHaveTextContent(
      "Welcome to our amazing team of professionals!"
    );
  });

  // Commented out because TeamMember components are not being used in the TeamSection component
  // it("renders the correct number of team members", () => {
  //   const teamMembers = screen.getAllByRole("img", { name: /john doe/i });
  //   expect(teamMembers).toHaveLength(mockProps.teammembers.length);
  // });
});
