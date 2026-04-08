import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App routing', () => {
  beforeEach(() => {
    window.history.pushState({}, 'Home page', '/');
    window.scrollTo = jest.fn();
  });

  test('renders home route at /', () => {
    render(<App />);
    expect(screen.getByText(/Meet Our Doctors/i)).toBeInTheDocument();
    expect(screen.getByText(/Health/i)).toBeInTheDocument();
  });

  test('renders legal page at /legal', () => {
    window.history.pushState({}, 'Legal page', '/legal');
    render(<App />);
    expect(screen.getByText(/General Info/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
  });

  test('renders appointment page at /appointment', () => {
    window.history.pushState({}, 'Appointment page', '/appointment');
    render(<App />);
    expect(screen.getByRole('button', { name: /Confirm Appointment/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Patient Full Name/i)).toBeInTheDocument();
  });

  test('renders not found for unknown route', () => {
    window.history.pushState({}, 'Not found page', '/missing-route');
    render(<App />);
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/missing-route/i)).toBeInTheDocument();
  });
});