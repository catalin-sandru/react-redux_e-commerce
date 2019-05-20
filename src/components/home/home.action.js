export const HomeAction = payload => {
  return {
    type: 'GET-ITEM', 
    payload
  }
}

export const DetailAction = id => {
  return {
    type: 'DETAILS',
    id
  }
}

export const OpenModalAction = id => {
  return {
    type: 'OPEN-MODAL',
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