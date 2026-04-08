import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock('react-toastify', () => ({
  ToastContainer: () => <div data-testid="toast" />,
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('Footer', () => {
  test('renders footer headings and links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/Health \+/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Legal/i)).toBeInTheDocument();
    expect(screen.getByText(/Talk To Us/i)).toBeInTheDocument();
    expect(screen.getByText(/support@healthplus.com/i)).toBeInTheDocument();
  });
});