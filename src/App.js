import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Link/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/products/:id' element={<ProductDetailsPage/>} />
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
