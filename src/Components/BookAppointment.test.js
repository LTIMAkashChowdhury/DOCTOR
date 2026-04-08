import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import BookAppointment from './BookAppointment';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('BookAppointment', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders the section title and description', () => {
    render(<BookAppointment />);
    expect(screen.getByText(/Why Choose Health/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Book Appointment/i })).toBeInTheDocument();
  });

  test('navigates to appointment page when book button is clicked', () => {
    render(<BookAppointment />);
    fireEvent.click(screen.getByRole('button', { name: /Book Appointment/i }));
    expect(mockNavigate).toHaveBeenCalledWith('/appointment');
  });
});