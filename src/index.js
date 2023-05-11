import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2';
import App from './App';
import TestUseEffect from './component2/TestUseEffect';
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home"
import Prices from "./pages/Prices"
import Product from './pages/Product';
import Products from "./pages/Products"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App2 />
  </BrowserRouter>


);


