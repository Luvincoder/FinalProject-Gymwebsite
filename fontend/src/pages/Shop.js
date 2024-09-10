// src/pages/Shop.js

import React, { useState, useContext } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography, Tabs, Tab } from '@mui/material';
import products from '../components/products'; // Correct path to products
import { CartContext } from '../components/CartContext'; // Correct path to CartContext

const Shop = () => {
  const [category, setCategory] = useState('All');
  const { addToCart } = useContext(CartContext);

  // Filter products based on selected category
  const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

  // Handle category change
  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#1c1c1c', color: '#e0e0e0', minHeight: '100vh' }}>
      <Typography variant="h3" sx={{ mb: 3, textAlign: 'center', color: '#ff2625' }}>Shop</Typography>

      {/* Tabs for category selection */}
      <Tabs
        value={category}
        onChange={handleCategoryChange}
        indicatorColor="primary"
        textColor="inherit"
        centered
        sx={{
          mb: 3,
          '.Mui-selected': { color: '#ff2625' }
        }}
      >
        <Tab label="All" value="All" />
        <Tab label="Equipment" value="Equipment" />
        <Tab label="Supplements" value="Supplements" />
      </Tabs>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {filteredProducts.map(product => (
          <Card
            key={product.id}
            sx={{
              maxWidth: 345,
              backgroundColor: '#2b2b2b',
              color: '#e0e0e0',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)',
                transform: 'translateY(-5px)',
                transition: 'transform 0.3s ease-in-out'
              }
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
              sx={{
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: '#ff2625',
                  '&:hover': {
                    backgroundColor: '#e6201d'
                  }
                }}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Shop;
