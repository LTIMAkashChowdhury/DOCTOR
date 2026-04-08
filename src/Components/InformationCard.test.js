import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InformationCard from './InformationCard';

describe('InformationCard', () => {
  test('renders icon, title, and description', () => {
    render(
      <InformationCard
        icon={{}}
        title="Test Service"
        description="This is a test description"
      />
    );

    expect(screen.getByText(/Test Service/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test description/i)).toBeInTheDocument();
  });
});