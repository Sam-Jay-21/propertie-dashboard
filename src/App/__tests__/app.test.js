import React from 'react';
import { render } from '@testing-library/react';
import App from '../index';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});
