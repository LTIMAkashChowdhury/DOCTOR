import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DoctorCard from './DoctorCard';

describe('DoctorCard', () => {
  test('renders doctor card with props', () => {
    render(
      <DoctorCard
        img="/test-image.png"
        name="Dr. Test"
        title="Test Specialist"
        stars="4.9"
        reviews="123"
      />
    );

    expect(screen.getByAltText(/Dr. Test/i)).toBeInTheDocument();
    expect(screen.getByText(/Dr. Test/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Specialist/i)).toBeInTheDocument();
    expect(screen.getByText(/4.9/i)).toBeInTheDocument();
    expect(screen.getByText(/123\+ Reviews/i)).toBeInTheDocument();
  });
});