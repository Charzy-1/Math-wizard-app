import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the toBeVisible matcher
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

test('should toggle the menu when the hamburger is clicked', () => {
  const { getByLabelText, getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  const hamburger = getByLabelText('Toggle menu');
  const homeLink = getByText('Home');

  // Before click, the menu should not be visible
  expect(homeLink).not.toBeVisible();

  // Click the hamburger icon to toggle the menu
  fireEvent.click(hamburger);

  // After click, the menu should be visible
  expect(homeLink).toBeVisible();
});
