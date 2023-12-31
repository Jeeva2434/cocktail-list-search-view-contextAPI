import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextAPI from './ContextAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextAPI>
      <App/>
    </ContextAPI>
  </React.StrictMode>
);

