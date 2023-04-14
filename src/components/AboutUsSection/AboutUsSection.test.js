import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GatsbyImage } from 'gatsby-plugin-image';
import AboutUsSection from './AboutUsSection';

describe('AboutUsSection', () => {
  const defaultProps = {
    primary_heading: 'About Us',
    primary_paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    featured_image: {
      localFile: {
        childImageSharp: { gatsbyImageData: {} }, // Add your GatsbyImage image object here
      },
      alt: 'A featured image',
    },
    secondary_heading: 'Our Mission',
    secondary_paragraph: 'Proin eget tortor risus.',
  };

  test('renders component with default props', () => {
    render(<AboutUsSection {...defaultProps} />);

    expect(screen.getByText(defaultProps.primary_heading)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.primary_paragraph)).toBeInTheDocument();

    // Check if GatsbyImage is rendered with the correct props
    expect(GatsbyImage).toHaveBeenCalledWith(
      {
        image: defaultProps.featured_image.localFile.childImageSharp.gatsbyImageData,
        alt: defaultProps.featured_image.alt,
        className: 'bounce-animation',
      },
      expect.any(Object)
    );

    expect(screen.getByText(defaultProps.secondary_heading)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.secondary_paragraph)).toBeInTheDocument();
  });
});
