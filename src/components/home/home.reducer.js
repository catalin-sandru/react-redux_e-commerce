import { storeProducts, detailProduct } from '../../asset/data'

const getItem = id => {
  let product = storeProducts.find(item => item.id === id)
  return product
}

export const HomeReducer = (state = storeProducts, action) => {
  switch(action.type) {
    case 'GET_ITEM':
      return state = getItem(action.payload)
    default:
      return state
  }
}

export const ModalReducer = () => {
  
}
