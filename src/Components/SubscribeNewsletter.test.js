import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SubscribeNewsletter from './SubscribeNewsletter';

const toastSuccess = jest.fn((message, options) => {
  options.onOpen?.();
  return null;
});

const toastError = jest.fn((message, options) => {
  options.onOpen?.();
  return null;
});

jest.mock('react-toastify', () => ({
  ToastContainer: () => <div data-testid="toast" />,
  toast: {
    success: toastSuccess,
    error: toastError,
    POSITION: { TOP_CENTER: 'top-center' },
  },
}));

describe('SubscribeNewsletter', () => {
  test('shows error toast for invalid email', () => {
    render(<SubscribeNewsletter />);
    fireEvent.change(screen.getByPlaceholderText(/Enter your email address/i), {
      target: { value: 'invalid-email' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Subscribe/i }));
    expect(toastError).toHaveBeenCalledWith('Invalid Email Address !', expect.any(Object));
  });

  test('shows success toast for valid email and clears input', () => {
    render(<SubscribeNewsletter />);
    const input = screen.getByPlaceholderText(/Enter your email address/i);
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Subscribe/i }));
    expect(toastSuccess).toHaveBeenCalledWith('Subscribed to Newsletter !', expect.any(Object));
    expect(input.value).toBe('');
  });
});