import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AppointmentForm from './AppointmentForm';

const toastSuccess = jest.fn((message, options) => {
  options.onOpen?.();
  return null;
});

jest.mock('react-toastify', () => ({
  ToastContainer: () => <div data-testid="toast-container" />,
  toast: {
    success: toastSuccess,
    POSITION: { TOP_CENTER: 'top-center' },
  },
}));

describe('AppointmentForm', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  test('renders form fields and title', () => {
    render(
      <MemoryRouter>
        <AppointmentForm />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/Patient Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Patient Phone Number/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Confirm Appointment/i })).toBeInTheDocument();
  });

  test('shows validation error for invalid phone number', () => {
    render(
      <MemoryRouter>
        <AppointmentForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Patient Full Name/i), {
      target: { value: 'John Smith' },
    });
    fireEvent.change(screen.getByLabelText(/Patient Phone Number/i), {
      target: { value: '12345' },
    });
    fireEvent.change(screen.getByLabelText(/Patient Gender/i), {
      target: { value: 'male' },
    });
    const futureDate = new Date(Date.now() + 86400000).toISOString().slice(0, 16);
    fireEvent.change(screen.getByLabelText(/Preferred Appointment Time/i), {
      target: { value: futureDate },
    });
    fireEvent.change(screen.getByLabelText(/Preferred Mode/i), {
      target: { value: 'voice' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Confirm Appointment/i }));

    expect(screen.getByText(/Patient phone number must be of 10 digits/i)).toBeInTheDocument();
  });

  test('submits successfully with valid appointment data', () => {
    render(
      <MemoryRouter>
        <AppointmentForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Patient Full Name/i), {
      target: { value: 'Jonathan Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Patient Phone Number/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/Patient Gender/i), {
      target: { value: 'male' },
    });
    const futureDate = new Date(Date.now() + 86400000).toISOString().slice(0, 16);
    fireEvent.change(screen.getByLabelText(/Preferred Appointment Time/i), {
      target: { value: futureDate },
    });
    fireEvent.change(screen.getByLabelText(/Preferred Mode/i), {
      target: { value: 'video' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Confirm Appointment/i }));

    expect(toastSuccess).toHaveBeenCalledWith('Appointment Scheduled !', expect.any(Object));
  });

  test('shows validation error for invalid phone number', () => {
    render(<AppointmentForm />);

    fireEvent.change(screen.getByLabelText(/Patient Full Name/i), {
      target: { value: 'John Smith' },
    });
    fireEvent.change(screen.getByLabelText(/Patient Phone Number/i), {
      target: { value: '12345' },
    });
    fireEvent.change(screen.getByLabelText(/Patient Gender/i), {
      target: { value: 'male' },
    });
    const futureDate = new Date(Date.now() + 86400000).toISOString().slice(0, 16);
    fireEvent.change(screen.getByLabelText(/Preferred Appointment Time/i), {
      target: { value: futureDate },
    });
    fireEvent.change(screen.getByLabelText(/Preferred Mode/i), {
      target: { value: 'voice' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Confirm Appointment/i }));

    expect(screen.getByText(/Patient phone number must be of 10 digits/i)).toBeInTheDocument();
  });

  test('submits successfully with valid appointment data', () => {
    render(<AppointmentForm />);

    fireEvent.change(screen.getByLabelText(/Patient Full Name/i), {
      target: { value: 'Jonathan Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Patient Phone Number/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/Patient Gender/i), {
      target: { value: 'male' },
    });
    const futureDate = new Date(Date.now() + 86400000).toISOString().slice(0, 16);
    fireEvent.change(screen.getByLabelText(/Preferred Appointment Time/i), {
      target: { value: futureDate },
    });
    fireEvent.change(screen.getByLabelText(/Preferred Mode/i), {
      target: { value: 'video' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Confirm Appointment/i }));

    expect(toastSuccess).toHaveBeenCalledWith('Appointment Scheduled !', expect.any(Object));
  });
});