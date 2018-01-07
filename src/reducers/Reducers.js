export const addDataReducer = (store = [], action) => {
  switch (action.type) {
  case 'ADD_DATA':
    return [...action.address];
  default:
    return store;
  }
};

export const filterAddressReducer = (store = [], action) => {
  switch (action.type) {
  case 'FILTER_ADDRESS':
    return action.data.filter(address => address);
  default:
    return store;
  }
};

export const addLocationReducer = (store = {lat: 39.59, lng: -106.06 }, action) => {
  switch (action.type) {
  case 'ADD_LOCATION':
    return  {
      lat: parseInt(action.coords.coordinates.lat),
      lng: parseInt(action.coords.coordinates.lng)  
    };  
  default:
    return store;
  }
};

