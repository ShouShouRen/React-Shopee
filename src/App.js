import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, ScrollRestoration } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/common/ScrollToTop';
import { AuthProvider } from './components/auth/AuthContext';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/*' element={<Navigate to="/mall" />} />
          <Route path='/mall' element={<HomePage />} exact />
          <Route path='/login' element={<LoginPage />} exact />
          <Route path='/cart' element={<CartPage />} exact />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/mall/:categoryName' element={<ProductCollectionPage />} />
          <Route path='/:productName' element={<ProductPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
