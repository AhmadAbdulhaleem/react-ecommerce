import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Load third Party packages
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
