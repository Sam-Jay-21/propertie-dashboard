import axios from 'axios';

const GET_PROPERTIES = 'https://api.simplyrets.com/properties';

export const getAllListings = () => {
  try {
    return axios.get(GET_PROPERTIES, {
      headers: {
        Authorization: `Basic  ${btoa('simplyrets:simplyrets')}`,
      },
    });
  } catch (err) {
    console.error('Error on fetch "/properties":: ', err?.message);
    return new Promise(() => {});
  }
};
