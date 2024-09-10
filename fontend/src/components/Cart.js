// components/Cart.js

import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CartContext } from './CartContext'; // Import CartContext

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext); // Use cart and actions from context

  return (
    <Box sx={{ p: 3, backgroundColor: '#1c1c1c', color: '#e0e0e0', minHeight: '100vh' }}>
      <Typography variant="h3" sx={{ mb: 3, textAlign: 'center', color: '#ff2625' }}>Cart</Typography>

      {cart.length === 0 ? (
        <Typography sx={{ textAlign: 'center' }}>Your cart is empty.</Typography>
      ) : (
        <Box sx={{ textAlign: 'center' }}>
          {cart.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography>{item.name} - {item.price}</Typography>
              <Button
                sx={{ mt: 1 }}
                variant="outlined"
                color="secondary"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            color="error"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
