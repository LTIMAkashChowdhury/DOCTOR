import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Hero component', () => {
  test('renders the hero headline', () => {
    render(<Hero />);
    expect(screen.getByText(/Health comes first of all/i)).toBeInTheDocument();
  });
});
