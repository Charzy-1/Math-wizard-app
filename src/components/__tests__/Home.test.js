import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

// Jest snapshot test
test('Home component matches the snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
