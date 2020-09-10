// import React from 'react';

// import Negocios from '../views/Negocios'
// import Home from '../views/Home'
// import Parallax from '../views/Parallax'
// // test
// const RenderHome = () => <h2>Home...</h2>;

// const indexRoutes = [

//   { path: "/home",routeTitle: "Home", render: props => <Home /> },

//   { path: "/negocios",routeTitle: "Negocios", render: props => <Negocios /> }

// ];

// export default indexRoutes;


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Negocios from '../views/Negocios'
import Home from '../views/Home'

export default function AuthExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/negocios">
            <Negocios />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}