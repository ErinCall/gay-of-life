import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/gay of life/i);
  expect(linkElement).toBeInTheDocument();
});
