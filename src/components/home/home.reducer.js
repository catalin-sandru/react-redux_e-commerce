import { storeProducts } from '../../asset/data'

export const HomeReducer = (state = storeProducts, action) => {
  switch(action.type) {
    case 'GET_ITEM':
      return state = storeProducts.find(item => item.id === action.payload);
      default:
        return state
  }
}