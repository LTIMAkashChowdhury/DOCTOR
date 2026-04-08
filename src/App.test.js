import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Health Plus app brand link', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /Health \+/i })).toBeInTheDocument();
});
