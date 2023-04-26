import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TeamMember from "./TeamMember";

const mockProps = {
  teammember: {
    name: "John Doe",
    title: "Software Engineer",
    imgsrc: "john-doe.jpg",
    socials: [
      {
        name: "John Doe",
        service: "LinkedIn",
        serviceurl: "www.linkedin.com/in/",
        account: "johndoe",
        iconimgsrc: "linkedin-icon.jpg",
      },
      {
        name: "John Doe",
        service: "GitHub",
        serviceurl: "github.com/",
        account: "johndoe",
        iconimgsrc: "github-icon.jpg",
      },
    ],
  },
};

describe("TeamMember", () => {
  beforeEach(() => {
    render(<TeamMember {...mockProps} />);
  });

  // ... (previous test cases)

  it("renders social links", () => {
    const linkedin = screen.getByRole("link", { name: "John Doe's LinkedIn" });
    const github = screen.getByRole("link", { name: "John Doe's GitHub" });

    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/johndoe");
    expect(github).toBeInTheDocument();
    expect(github).toHaveAttribute("href", "https://github.com/johndoe");
  });
});
