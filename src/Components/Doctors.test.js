import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Doctors from './Doctors';

describe('Doctors', () => {
  test('renders all doctor profiles', () => {
    render(<Doctors />);
    expect(screen.getByText(/Meet Our Doctors/i)).toBeInTheDocument();
    expect(screen.getByText(/Dr. Kathryn Murphy/i)).toBeInTheDocument();
    expect(screen.getByText(/Dr. Jacob Jones/i)).toBeInTheDocument();
    expect(screen.getByText(/Dr. Jenny Wilson/i)).toBeInTheDocument();
    expect(screen.getByText(/Dr. Albert Flores/i)).toBeInTheDocument();
  });
});