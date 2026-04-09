import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

// Mock react-toastify properly with POSITION object
jest.mock('react-toastify', () => ({
  toast: {
    info: jest.fn(),
    POSITION: {
      TOP_CENTER: 'top-center',
    },
  },
}));

describe('Navbar Component', () => {
  // Test 1: Component renders without crashing
  test('renders the navbar', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText(/Health/i)).toBeInTheDocument();
  });

  // Test 2: Brand link is present
  test('renders the Health+ brand link', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const brandLink = screen.getByRole('link', { name: /Health/i });
    expect(brandLink).toBeInTheDocument();
  });

  // Test 3: Navigation links are present
  test('renders navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    // Use getAllByText since links appear in both desktop and mobile menus
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Reviews').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Doctors').length).toBeGreaterThan(0);
  });

  // Test 4: Live Chat button is present
  test('renders the Live Chat button', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const chatButton = screen.getByRole('button', { name: /Live Chat/i });
    expect(chatButton).toBeInTheDocument();
  });

  // Test 5: Mobile menu is present
  test('renders mobile menu', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>
    );
    const mobileMenu = container.querySelector('.mobile-navbar');
    expect(mobileMenu).toBeInTheDocument();
  });

  // Test 6: Home link from mobile menu exists
  test('renders Home link in mobile menu', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);
  });
});