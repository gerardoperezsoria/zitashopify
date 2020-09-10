import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// el Store que creamos antes
import store from './store';
// nuestros componentes de React para la App y las vistas
import App from './container/App';
import Home from './container/Home';
// sincronizamos el browserHistory de React Router con el Store
const history = syncHistoryWithStore(browserHistory, store);
// renderizamos nuestra app
render(
  <Provider store={store}>
    {/*le decimos al Router que use nuestro history sincronizado*/}
    <Router history={history}>
      {/*armamos las rutas de nuestra aplicación*/}
      <Route component={App}>
        <Route path="/" component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);