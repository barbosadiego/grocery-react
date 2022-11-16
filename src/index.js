import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalProvider } from './contexts/GlobalContext';
import { CartProvider } from './contexts/CartContext';

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </GlobalProvider>
  </StrictMode>,
);
