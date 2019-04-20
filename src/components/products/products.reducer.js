import { storeProducts } from '../../asset/data';

export const GetItem = (state=[], action) => {
  switch(action.type){
    case 'getItem':
      return state = storeProducts.find(item => item.id === action.payload);
    default: 
      return state
  }
}