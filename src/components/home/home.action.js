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

export const OpenModalAction = id => {
  return {
    type: 'openModal',
    id
  }
}

export const CloseModalAction = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}

export const AddToCartAction = id => {
  return {
    type: 'ADD_TO_CART',
    id
  }
}

export const IncrementAction = id => {
  return {
    type: 'INCREMENT',
    id
  }
}

export const DecrementAction = id => {
  return {
    type: 'DECREMENT',
    id
  }
}


export const ClearCartAction = id => {
  return {
    type: 'CLEAR-CART'
  }
}

export const RemoveItemAction = id => {
  return {
    type: 'REMOVE-ITEM',
    id
  }
}