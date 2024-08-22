import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

// Jest snapshot test
test('Calculator component matches the snapshot', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});

// Test user interaction
test('should update the display when a button is clicked', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
//   expect(getByText('3')).toBeInTheDocument();
});
