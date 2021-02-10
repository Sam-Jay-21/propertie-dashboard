import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { NavBar } from '../index';

describe('NavBar', () => {
  const history = createMemoryHistory();

  it('renders all navigation links', () => {
    render(
      <Router history={history}>
        <NavBar />
      </Router>,
    );

    expect(screen.getByText(/Property Listings/i)).toBeInTheDocument();
    expect(screen.getByText(/Saved Listings/i)).toBeInTheDocument();
  });

  it('landing on the correct page', () => {
    const route = '/saved-listings';
    history.push(route);
    render(
      <Router history={history}>
        <NavBar />
      </Router>,
    );

    expect(history.location.pathname).toBe('/saved-listings');
  });
});
