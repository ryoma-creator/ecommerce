import React from 'react'; // 追加
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import './output.css'; // Tailwind CSS を含むファイル
// product provider
import ProductProvider from './contexts/ProductContext.jsx';
// sidebar provider
import SidebarProvider from './contexts/SidebarContext.jsx';

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ProductProvider>
// "Reason for wrapping with `ProductProvider`:
//  To make `ProductContext` available throughout the application."
);
