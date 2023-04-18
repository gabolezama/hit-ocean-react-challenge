import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './CartContext/CartContext';
import { store } from './GlobalState/Store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
