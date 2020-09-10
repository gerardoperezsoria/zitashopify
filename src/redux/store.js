import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './reducers/todos';
export default createStore(combineReducers({
  todos,
  routing: routerReducer,
});