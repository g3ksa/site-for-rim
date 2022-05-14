import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import { init } from './components/map/regions_districts';
import { App } from './App';


ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('wrapper')
);


ymaps.ready(init);