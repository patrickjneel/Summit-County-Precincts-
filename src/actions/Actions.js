export const addData = (data) => {
  return {
    type: 'ADD_DATA',
    data
  }
}

export const filterAddress = (address) => {
  return {
    type: 'FILTER_ADDRESS',
    address
  }
}

export const addLocation = (coords) => {
  return {
    type: 'ADD_LOCATION',
    coords
  }
}
 
