import { storeProducts } from '../../asset/data';

export const GetItem = (state=[], action) => {
  switch(action.type){
    case 'getItem':
      state = storeProducts.find(item => item.id === action.payload);
      console.log(state)
      return state;
    default: 
      return state
  }
}