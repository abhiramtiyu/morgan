import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { UserProvider } from './context/user.context';
import {ProductProvider} from './context/product.context';
import { CartProvider } from './routes/authentication/cart-context';

import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <UserProvider>
            <ProductProvider>
                <CartProvider>
                    <App/>
                </CartProvider>
            </ProductProvider>
        </UserProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
