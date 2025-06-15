import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders family office heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Family Office/i);
  expect(linkElement).toBeInTheDocument();
}); 