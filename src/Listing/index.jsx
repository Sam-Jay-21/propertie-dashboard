import React from 'react';
import moment from 'moment';
import RemoveIcon from '../assets/icons/liked.svg';
import SaveIcon from '../assets/icons/unliked.svg';
import { ListingsContext } from '../hooks';
import styles from './styles.scss';

export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return price ? formatter.format(price) : '--';
};

export const Listing = ({ details }) => {
  const { updateSavedListings, savedListings = {} } = React.useContext(ListingsContext);
  const {
    listingId,
    listPrice,
    listDate,
    property: { bedrooms, area, bathsFull, bathsHalf } = {},
    address: { city, state, streetName, streetNumber } = {},
    photos: [imgUrl],
  } = details;
  const saved = savedListings[listingId] ?? false;

  return (
    <div className={styles.listing}>
      <img className={styles.listingImg} src={imgUrl} alt="No photo" width="315" height="280" />
      <div className={styles.details}>
        <div>
          {`${bedrooms} BR`} | {`${bathsFull + bathsHalf / 2} Bath`} | {`${area} Sq Ft`}
        </div>
        <div>{formatPrice(listPrice)}</div>
        <div>{`${streetNumber} ${streetName}, ${city}, ${state}`}</div>
        <div>Listed: {moment(listDate).format('l')}</div>
      </div>
      <img
        src={saved ? RemoveIcon : SaveIcon}
        alt={saved ? 'un-save' : 'save'}
        width="39"
        height="36"
        className={styles.saveIcon}
        onClick={() => updateSavedListings(details)}
      />
    </div>
  );
};
