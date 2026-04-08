import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const element = screen.getByText((content, element) => {
    return content.includes('Health') && element.tagName.toLowerCase() === 'a';
  });
  expect(element).toBeInTheDocument();
});