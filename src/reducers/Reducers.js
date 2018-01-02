
export const addDataReducer = (store = [], action) => {
  switch(action.type) {
    case 'ADD_DATA':
    // console.log(action.data)
    return [...action.data]
    default:
    return store;
  }
}
