import { combineReducers } from 'redux';
import { HomeReducer, DetailReducer, ModalReducer, CartReducer, CartTotal} from './components/home/home.reducer';

export const rootReducer = combineReducers({
  HomeReducer,
  DetailReducer,
  ModalReducer,
  CartReducer,
  CartTotal
})