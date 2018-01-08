export const addData = (address) => {
  return {
    type: 'ADD_DATA',
    address
  };
};

export const addLocation = (coords) => {
  return {
    type: 'ADD_LOCATION',
    coords
  };
};
