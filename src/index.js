import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'
import { BrowserRouter, Router } from 'react-router-dom';
import CardPay from './components/payment/CardPay';
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
      </BrowserRouter>,
  document.getElementById('root')
);

