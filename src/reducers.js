import { combineReducers } from 'redux';
import { HomeReducer } from './components/home/home.reducer';
import { GetItem, OpenModal } from './components/products/products.reducer'

export const rootReducer = combineReducers({
  HomeReducer,
  GetItem,
  OpenModal
})