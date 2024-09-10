// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Shop from './pages/Shop';
import Cart from './components/Cart'; // Import Cart component
import Login from './pages/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext'; // Import CartProvider

const App = () => {
  return (
    <CartProvider> {/* Wrap the application in CartProvider */}
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} /> {/* Add Cart route */}
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Box>
    </CartProvider>
  );
}

export default App;
