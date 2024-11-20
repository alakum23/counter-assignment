import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter.js'

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  const count = screen.getByTestId('count');
  fireEvent.click(incrementButton);  
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  const count = screen.getByTestId('count');
  fireEvent.click(decrementButton);  
  expect(count).toHaveTextContent('-1');
});
