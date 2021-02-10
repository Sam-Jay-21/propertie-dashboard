import React from 'react';
import { getAllListings } from '../api';

export const ListingsContext = React.createContext({});

export const useListings = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState({
    success: true,
    message: '200 OK',
  });

  const [allListings, setAllListings] = React.useState([]);
  const [savedListings, setSavedListings] = React.useState(
    JSON.parse(window.localStorage.getItem('savedListings')) ?? {},
  );

  React.useEffect(() => {
    setLoading(true);

    const response = getAllListings();

    response
      .then((res) => {
        setLoading(false);
        setAllListings(res.data);
      })
      .catch((err) => {
        console.error('Error on fetch "/properties":: ', err?.message);

        setStatus({
          ...err,
          success: false,
        });
        setLoading(false);
      });
  }, []);

  const updateSavedListings = (listing) => {
    setSavedListings((prevState) => {
      const newState = {
        ...prevState,
        [listing.listingId]: prevState[listing.listingId] ? false : listing,
      };

      window.localStorage.setItem('savedListings', JSON.stringify(newState));

      return newState;
    });
  };

  return {
    isLoading,
    status,
    allListings,
    savedListings,
    updateSavedListings,
  };
};

export const ListingsProvider = ({ children }) => {
  const listingDetails = useListings();

  return <ListingsContext.Provider value={listingDetails}>{children}</ListingsContext.Provider>;
};
