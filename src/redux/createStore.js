import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';
  import { routerReducer } from 'react-router-redux';
  import todos from './reducers/todos';
  // importamos el history sincronizado
  import history from './history';
  // combinamos nuestros reducers
  const reducers = combineReducers({
    todos,
    routing: routerReducer,
  });
  // creamos y exportamos el store con el middleware aplicado
  export default createStore(
    reducers,
    applyMiddleware(routerMiddleware(history))
  );