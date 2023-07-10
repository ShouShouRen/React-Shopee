import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, ScrollRestoration } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/*' element={<Navigate to="/mall" />} />
        <Route path='/mall' element={<HomePage />} exact />
        <Route path='/cart' element={<CartPage />} exact />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/mall/:categoryName' element={<ProductCollectionPage />} />
        <Route path='/:productName' element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
