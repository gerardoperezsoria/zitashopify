import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
render(
  <App timer={1000} />,
  document.getElementById('app')
);