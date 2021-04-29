import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(s/This React app is running in a Docker container/i);
  expect(linkElement).toBeInTheDocument();
});
