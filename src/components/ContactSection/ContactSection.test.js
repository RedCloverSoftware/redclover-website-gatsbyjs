import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  const defaultProps = {
    primary_heading: 'Get in Touch',
    gradient: 'linear-gradient(to bottom, #f06, #f06)',
  };

  test('renders component with given props', () => {
    render(<ContactSection {...defaultProps} />);

    expect(screen.getByText(defaultProps.primary_heading)).toBeInTheDocument();

    const presentationImages = screen.getAllByRole('presentation');
    expect(presentationImages).toHaveLength(2);

    expect(screen.getByRole('link', { name: 'CONTACT US!' })).toHaveAttribute('href', 'mailto:frontdesk@redcloversoftware.ca');
  });

  test('applies gradient prop to outer container', () => {
    const { container } = render(<ContactSection {...defaultProps} />);
    const outerContainer = container.firstChild;

    expect(outerContainer).toHaveStyle(`background: ${defaultProps.gradient}`);
  });
});
