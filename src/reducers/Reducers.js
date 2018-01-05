
export const addDataReducer = (store = [], action) => {
  switch(action.type) {
    case 'ADD_DATA':
    return [...action.data]
    default:
    return store;
  }
}

export const filterAddressReducer = (store = [], action) => {
  switch(action.type) {
    case 'FILTER_ADDRESS':
    return action.data.filter(address => address)
    default:
    return store;
  }
}

export const addLocationReducer = (store = [], action) => {
  switch(action.type) {
    case 'ADD_LOCATION':
    return [...action.coords]
    default:
    return store;
  }
}

