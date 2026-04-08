import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Reviews from './Reviews';

describe('Reviews', () => {
  test('renders review section and cycles reviews', () => {
    render(<Reviews />);

    const reviewerName = screen.getByText(/Esther Howard|John Doe|Alice Smith|Bob Johnson|Jane Brown|Robert Wilson|Mary Lee|David Miller|Sarah Johnson|Michael Brown/i);
    expect(reviewerName).toBeInTheDocument();

    const nextButton = screen.getAllByRole('button', { name: /→|←/i })[1];
    fireEvent.click(nextButton);
    expect(screen.getByText(/Mr.|Dr.|Health/i)).toBeInTheDocument();

    const backButton = screen.getAllByRole('button', { name: /←/i })[0];
    fireEvent.click(backButton);
    expect(screen.getByText(/Esther Howard|John Doe|Alice Smith|Bob Johnson|Jane Brown|Robert Wilson|Mary Lee|David Miller|Sarah Johnson|Michael Brown/i)).toBeInTheDocument();
  });
});