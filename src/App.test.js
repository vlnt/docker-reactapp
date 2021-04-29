import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/this react app is running in a docker container!/i);
  expect(linkElement).toBeInTheDocument();
});
