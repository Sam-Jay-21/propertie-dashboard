import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import { Listing, formatPrice } from '../index';
import { ListingsProvider, useListings } from '../../hooks';
import mockListings from '../../../__data__/allListings.json';

describe('Listing', () => {
  it('should use saved listings from listings context', () => {
    const wrapper = ({ children }) => <ListingsProvider>{children}</ListingsProvider>;

    const { result } = renderHook(() => useListings(), { wrapper });

    expect(result.current.savedListings).toStrictEqual({});
    expect(typeof result.current.updateSavedListings).toBe('function');
  });

  it('renders a listing without error', () => {
    render(<Listing details={mockListings[0]} />);

    expect(screen.getByRole('img', { name: 'No photo' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'save' })).toBeInTheDocument();
    expect(screen.getByText(/74434 East Sweet Bottom Br, Houston, Texas/i)).toBeInTheDocument();
  });

  it('should save the listing', () => {
    const wrapper = ({ children }) => <ListingsProvider>{children}</ListingsProvider>;

    const { result } = renderHook(() => useListings(), { wrapper });

    act(() => {
      result.current.updateSavedListings(mockListings[0]);
    });

    expect(result.current.savedListings).toStrictEqual({
      [mockListings[0].listingId]: mockListings[0],
    });
  });

  it('format list price', () => {
    const mockPrice = 345678;
    expect(formatPrice(mockPrice)).toStrictEqual('$345,678');
  });

  it('format 0 list price', () => {
    const mockPrice = 0;
    expect(formatPrice(mockPrice)).toStrictEqual('--');
  });
});
