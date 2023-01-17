import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import patient from './components/patient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <patient/>
  </div>
);
