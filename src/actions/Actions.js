export const addData = (address) => {
  return {
    type: 'ADD_DATA',
    address
  };
};

export const filterAddress = (address) => {
  return {
    type: 'FILTER_ADDRESS',
    address
  };
};

export const addLocation = (coords) => {
  return {
    type: 'ADD_LOCATION',
    coords
  };
};
 
