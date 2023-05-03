import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRooter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRooter>
    <App />
    </HashRooter>
  </React.StrictMode>,
  document.getElementById('root')
);


