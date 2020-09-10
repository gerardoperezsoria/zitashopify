import {
    push,
    replace,
    go,
    goBack,
    goForward,
  } from 'react-router-redux';
  import store from './store';
  // el objeto location que usamos en push y replace
  // pathname = un string con lo que viene luego del / (incluyéndolo)
  // search   = un string con lo que viene luego del ? (incluyéndolo)
  // query    = un objeto con el string de search parseado
  // state    = un objeto con datos extras que no van en la URL
  const location = {
    pathname: '/hola',
    search: '?name=mundo',
    query: { name: 'mundo' },
    state: {},
  }
  // agregamos un nuevo location y lo volvemos el actual (cambia la URL)
  store.dispatch(push(location));
  // reemplaza el location actual por el indicado
  store.dispatch(replace(location));
  // se mueve N posiciones en el historial (positivo o negativo)
  store.dispatch(go(N));
  // se mueve a la anterior posición del historial (igual a go(-1))
  store.dispatch(goBack());
  // se mueve a la siguiente posición del historial (igual a go(1))
  store.dispatch(goForward());