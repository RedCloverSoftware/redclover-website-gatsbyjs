import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  const defaultProps = {
    primary_heading: "Primary Heading",
    primary_paragraph: "Primary Paragraph",
  };

  test("renders component with default props", () => {
    render(<HeroSection {...defaultProps} />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.primary_heading)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.primary_paragraph)).toBeInTheDocument();
    expect(screen.getByText("CONTACT US!")).toBeInTheDocument();
    expect(screen.getByText("CONTACT US!").closest("a")).toHaveAttribute("href", "mailto:frontdesk@redcloversoftware.ca");
  });

  test("img object position changes based on mockupDevicePosition", async () => {
    jest.useFakeTimers();

    render(<HeroSection {...defaultProps} />);

    const imageElement = screen.getByAltText("A sheet of examples of websites built by Red Clover Software Services Inc.");

    expect(imageElement.style.objectPosition).toBe("0%");

    await act(async () => {
      jest.advanceTimersByTime(5000);
    });

    expect(imageElement.style.objectPosition).toBe("20%");

    await act(async () => {
      jest.advanceTimersByTime(5000);
    });

    expect(imageElement.style.objectPosition).toBe("40%");

    jest.useRealTimers();
  });
});
