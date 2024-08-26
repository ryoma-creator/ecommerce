import React from 'react'; // 追加
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// product provider
import ProductProvider from './contexts/ProductContext.jsx';

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ProductProvider>
);
