import { combineReducers } from 'redux';
import { HomeReducer, DetailReducer, ModalReducer, CartReducer} from './components/home/home.reducer';

export const rootReducer = combineReducers({
  HomeReducer,
  DetailReducer,
  ModalReducer,
  CartReducer
})