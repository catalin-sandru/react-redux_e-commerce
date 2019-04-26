import { storeProducts } from '../../asset/data'

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
    case 'showModal':
      return state = getItem(action.payload)
    default:
      return state
  }
}
