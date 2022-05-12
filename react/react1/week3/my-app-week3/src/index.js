import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Time from './TitleTime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Time />
     <br/>
    <App />
   
  </React.StrictMode>
);

