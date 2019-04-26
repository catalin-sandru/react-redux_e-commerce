import { combineReducers } from 'redux';
import { HomeReducer, DetailReducer, ModalReducer} from './components/home/home.reducer';

export const rootReducer = combineReducers({
  HomeReducer,
  DetailReducer,
  ModalReducer
})