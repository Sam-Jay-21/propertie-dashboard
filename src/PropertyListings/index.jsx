import React from 'react';
import { Listing } from '../Listing';
import { ListingsContext } from '../hooks';
import styles from '../App/styles.scss';

export const PropertyListings = () => {
  const { allListings, isLoading, status } = React.useContext(ListingsContext);

  const hasListings = !!allListings.length;

  return (
    <div className={styles.container}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          {status?.success && (
            <div className={styles.listingGrid}>
              {hasListings && allListings.map((it) => <Listing key={it.listingId} details={it} />)}
            </div>
          )}
          {!hasListings && <div>No listings found...</div>}
        </>
      )}
    </div>
  );
};
