export const HomeAction = payload => {
  return {
    type: 'GET_ITEM', 
    payload
  }
}

export const DetailAction = id => {
  return {
    type: 'details',
    id
  }
}