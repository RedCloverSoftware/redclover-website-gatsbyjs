import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { PrismicRichText } from '@prismicio/react';
import Footer from './Footer';

// Mock GatsbyImage and getImage
jest.mock('gatsby-plugin-image', () => {
  return {
    GatsbyImage: jest.fn(({ alt }) => <img data-testid="mock-gatsby-image" alt={alt} />),
    getImage: jest.fn(),
  };
});

// Mock PrismicRichText
jest.mock('@prismicio/react', () => ({
  PrismicRichText: ({ field }) => (
    <p data-testid="mock-prismic-rich-text">
      {field.map((item) => item.text).join(' ')}
    </p>
  ),
}));

describe('Footer', () => {
  const defaultProps = {
    logo: {
      localFile: {
        childImageSharp: { gatsbyImageData: {} },
      },
      alt: 'Company Logo',
    },
    footer_text: {
      richText: [
        {
          type: 'paragraph',
          text: '© 2023 by Red Clover Software. All rights reserved.',
          spans: [],
        },
      ],
    },
  };

  test('renders component with default props', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getByTestId('mock-gatsby-image')).toBeInTheDocument();
    expect(screen.getByTestId('mock-prismic-rich-text')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: defaultProps.logo.alt })).toHaveAttribute('href', '/');
    expect(screen.getByText(defaultProps.footer_text.richText[0].text)).toBeInTheDocument();
  });
});
