import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import StepsChartSection from "./StepsChartSection";

const mockProps = {
  primary_heading: "Test Heading",
  primary_paragraph: "Test Paragraph",
  process_steps: [
    {
      procstep_primary_step_title: { richText: [{ text: "Step 1" }] },
      procstep_image: { localFile: { publicURL: "image1.jpg" }, alt: "Image 1" },
      procstep_step_paragraph: { richText: [{ text: "Step 1 Description" }] },
    },
    {
      procstep_primary_step_title: { richText: [{ text: "Step 2" }] },
      procstep_image: { localFile: { publicURL: "image2.jpg" }, alt: "Image 2" },
      procstep_step_paragraph: { richText: [{ text: "Step 2 Description" }] },
    },
  ],
};

describe("StepsChartSection", () => {
  beforeEach(() => {
    render(<StepsChartSection {...mockProps} />);
  });

  // Other tests...

  it("shows step description when clicking on a step", () => {
    mockProps.process_steps.forEach((step, index) => {
      const stepTitle = step.procstep_primary_step_title.richText[0].text;
      const stepDescription = step.procstep_step_paragraph.richText[0].text;

      const stepButtons = screen.getAllByRole("button", { name: stepTitle });

      // Click on each step button
      stepButtons.forEach((stepButton) => {
        fireEvent.click(stepButton);
      });

      // Get all the step description elements
      const stepDescriptions = screen.getAllByText(stepDescription);

      // Check if each step description is visible
      stepDescriptions.forEach((stepDesc) => {
        expect(stepDesc).toBeVisible();
      });
    });
  });
});
