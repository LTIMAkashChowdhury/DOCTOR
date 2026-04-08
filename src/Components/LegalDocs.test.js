import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LegalDocs from './LegalDocs';

describe('LegalDocs', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  test('renders legal page content', () => {
    render(
      <MemoryRouter>
        <LegalDocs />
      </MemoryRouter>
    );
    expect(screen.getByText(/^General Info$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Privacy Policy$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Terms of Service$/i)).toBeInTheDocument();
    expect(window.scrollTo).toHaveBeenCalled();
  });
});