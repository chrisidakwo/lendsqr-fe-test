import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './AppRoot';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello LendSqr/i);
  expect(linkElement).toBeInTheDocument();
});
