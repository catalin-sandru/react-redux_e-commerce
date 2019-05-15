import { storeProducts } from '../../asset/data';

  const getItem = id => {
  let product = storeProducts.find(item => item.id === id)
  return product
}

export const HomeReducer = (state = storeProducts, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export const DetailReducer = (state = [], action) => {
  switch(action.type) {
    case 'details':
      const product = getItem(action.id) 
      return state = [product]
    default:
      return state
  }
}

export const ModalReducer = (state = [], action) => {
  switch(action.type) {
    case 'openModal':
      return state = [getItem(action.id)]
    case 'CLOSE_MODAL':
      return state = []
    default:
      return state
  }
}


export const CartReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      let product = getItem(action.id);
      product.count = 1;
      product.inCart = true;
      product.total = product.count * product.price;
      state = [
        ...state,
        product,
      ]
      return state

    case 'INCREMENT':
      return state.map(product => product.id === action.id ? 
        ({...product, 
          total: product.count * product.price + product.price, 
          count: product.count+1}) : 
        product
      )
      
    case 'DECREMENT':
      return state.map(product => product.id === action.id ? 
        ({...product, 
          count: product.count > 0 ? product.count-1 : 0, 
          total: product.count * product.price - product.price}) : 
        product
      )
    default:
     return state;
  }
}

export const CartTotal = (state = [0], action) => {
  switch(action.type) {
    case 'CART-TOTAL':
      
    return state
  default:
    return state
  }
}
