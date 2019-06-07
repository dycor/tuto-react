import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducuers = combineReducers({
  todoReducer
});

export default rootReducuers;