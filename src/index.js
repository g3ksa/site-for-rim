import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import './styles/style.scss';

const wrapper = ReactDOM.createRoot(document.getElementById('wrapper'));
wrapper.render(
  <>
    <Header />
    <MainBlock />
  </>
);
