import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this is imported
import Navbar from '../Navbar';
import { MemoryRouter } from 'react-router-dom';

test('should toggle the menu when the hamburger is clicked', () => {
  const { getByText, getByRole } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const hamburger = getByRole('button', { name: /toggle menu/i });

  // Before click, the menu should not be visible
  expect(getByText('Home')).not.toBeVisible();

  // After click, the menu should be visible
  fireEvent.click(hamburger);
  expect(getByText('Home')).toBeVisible();
});
