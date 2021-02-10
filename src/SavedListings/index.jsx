import React from 'react';
import { Listing } from '../Listing';
import { ListingsContext } from '../hooks';
import styles from '../App/styles.scss';

export const SavedListings = () => {
  const { savedListings, isLoading, status } = React.useContext(ListingsContext);

  const listings = Object.values(savedListings).filter((it) => !!it);
  const hasListings = !!listings.length;

  return (
    <div className={styles.container}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          {status?.success && (
            <div className={styles.listingGrid}>
              {hasListings && listings.map((it) => <Listing key={it.listingId} details={it} />)}
            </div>
          )}
          {!hasListings && <div>No saved listings found...</div>}
        </>
      )}
    </div>
  );
};
