import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Info from './Info';

describe('Info', () => {
  test('renders info section with service descriptions', () => {
    render(<Info />);
    expect(screen.getByText(/What We Do/i)).toBeInTheDocument();
    expect(screen.getByText(/^Emergency Care$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Heart Disease$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Dental Care$/i)).toBeInTheDocument();
  });
});