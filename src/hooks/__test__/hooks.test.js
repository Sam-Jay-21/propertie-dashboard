import { renderHook } from '@testing-library/react-hooks';
import { useListings } from '../index';

describe('hooks', () => {
  it('should initialize listings', async () => {
    const listingsContext = renderHook(useListings);
    const {
      result: {
        current: { allListings, isLoading, status, savedListings, updateSavedListings },
      },
    } = listingsContext;

    expect(isLoading).toEqual(true);
    expect(allListings).toEqual([]);
    expect(savedListings).toEqual({});
    expect(status).toStrictEqual({
      success: true,
      message: '200 OK',
    });
    expect(typeof updateSavedListings).toBe('function');
  });
});
