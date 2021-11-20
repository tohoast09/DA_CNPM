import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'
import { BrowserRouter, Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

