import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './globals.css';
import './index.css'; // Make sure to include this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);