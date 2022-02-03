import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App headerText="Welcome to the Shop" extraText='Hello <username>'/>
  </React.StrictMode>,
  document.getElementById('root')
);


