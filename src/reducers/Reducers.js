export const addDataReducer = (store = [], action) => {
  switch (action.type) {
  case 'ADD_DATA':
    return [...store, ...action.address];
  default:
    return store;
  }
};

export const addLocationReducer = (store = {lat: 39.59, lng: -106.06, fullAddress: ''}, action) => {
  switch (action.type) {
  case 'ADD_LOCATION':
    return  {
      address: action.coords.address,
      lat: action.coords.coordinates.lat,
      lng: action.coords.coordinates.lng,
      fullAddress: action.coords.fullAddress
    };  
  default:
    return store;
  }
};

