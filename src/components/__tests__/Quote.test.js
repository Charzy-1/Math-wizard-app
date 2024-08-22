import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Quote';

// Jest snapshot test
test('Quote component matches the snapshot', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
