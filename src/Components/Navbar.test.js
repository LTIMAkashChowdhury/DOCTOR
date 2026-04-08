import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

const toastInfo = jest.fn((message, options) => {
  options.onOpen?.();
  return null;
});

jest.mock('react-toastify', () => ({
  toast: {
    info: toastInfo,
  },
}));

describe('Navbar', () => {
  test('renders navbar brand and links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText(/Health/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  test('opens mobile menu when hamburger is clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const mobileToggle = container.querySelector('.mobile-nav .hamb-icon');
    expect(mobileToggle).toBeInTheDocument();

    fireEvent.click(mobileToggle);
    expect(container.querySelector('.mobile-navbar')).toHaveClass('open-nav');
  });

  test('shows toast info on live chat click', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const liveChatButton = screen.getByRole('button', { name: /Live Chat/i });
    fireEvent.click(liveChatButton);
    expect(toastInfo).toHaveBeenCalledWith(expect.stringContaining('Experiencing high traffic'), expect.any(Object));
    expect(liveChatButton).not.toBeDisabled();
  });
});