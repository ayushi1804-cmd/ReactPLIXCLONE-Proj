import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './Context/CartContext.jsx'; // adjust path as needed
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
