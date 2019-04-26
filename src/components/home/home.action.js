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

export const OpenModalAction = payload => {
  return{
    type: 'openModal',
    payload
  }
}

export const CloseModalAction = () => {
  return{
    type: 'CLOSE_MODAL'
  }
}