import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Header from './Header';

describe('Header', () => {
  const defaultProps = {
    logo: {
      localFile: {
        childImageSharp: { gatsbyImageData: {} },
      },
      alt: 'Company Logo',
    },
    nav_links: [
      { link_title: 'Home', page_link: { url: '/' } },
      { link_title: 'About', page_link: { url: '/about' } },
    ],
    cta_button: {
      cta_label: 'Contact Us',
      cta_link: '/contact',
    },
  };

  test('renders component with default props', () => {
    render(<Header {...defaultProps} />);

    // Check for desktop header elements
    defaultProps.nav_links.forEach((link) => {
      const linkElements = screen.getAllByText(link.link_title);
      const desktopLink = linkElements.find((element) => element.closest('div').className.includes('sc-iBYQkv'));
      expect(desktopLink).toHaveAttribute('href', link.page_link.url);
    });
    expect(screen.getByText(defaultProps.cta_button.cta_label)).toHaveAttribute('href', defaultProps.cta_button.cta_link);

    // Check for mobile header elements
    const menuOpenButton = screen.getByLabelText('Open Navigation');
    fireEvent.click(menuOpenButton);

    defaultProps.nav_links.forEach((link) => {
      const linkElements = screen.getAllByText(link.link_title);
      const mobileLink = linkElements.find((element) => element.closest('div').className.includes('sc-eDvSVe'));
      expect(mobileLink).toHaveAttribute('href', link.page_link.url);
    });

    const menuCloseButton = screen.getByLabelText('Close Navigation');
    fireEvent.click(menuCloseButton);
  });
});
