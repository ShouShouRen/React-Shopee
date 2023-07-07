import React from 'react';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Navigate to="/mall" />} />
        <Route path='/mall' element={<HomePage />} exact />
        <Route path='/cart' element={<CartPage />} exact />
        <Route path='/checkout' element={<CheckoutPage exact />} />
        <Route path='/mall/:categoryName' element={<ProductCollectionPage />} />
        <Route path='/:productName' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
