import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SolutionStep from './SolutionStep';

describe('SolutionStep', () => {
  test('renders title and description', () => {
    render(<SolutionStep title="Step Title" description="Step Description" />);
    expect(screen.getByText(/Step Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Step Description/i)).toBeInTheDocument();
  });
});