import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vid Dahle Library Cards heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Vid Dahle Library Cards/i);
  expect(headingElement).toBeInTheDocument();
});

