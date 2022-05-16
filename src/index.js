import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.scss';
import { init } from './components/map/regions_districts';
import { Trash } from './components/Admin';
import { Login } from './components/Login';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('wrapper')
);

document.querySelector('html').classList.add(!localStorage.theme ? 'dark' : localStorage.getItem('theme'));

ymaps.ready(init);