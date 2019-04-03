import { storeProducts } from '../../asset/data'

export const InitListReducer = (state = storeProducts, action) => {
  switch(action.type) {
    case 'initList':
      return action.payload.map(product => ({...product}))
    default:
      return state
  }
}