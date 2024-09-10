// src/components/Navbar.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import Logo from '../assets/images/Logo.png';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: { sm: '123px', xs: '20px' },
        mt: { sm: '32px', xs: '20px' },
        px: '20px',
        py: '10px',
        background: 'linear-gradient(90deg, rgba(58, 18, 18, 1) 0%, rgba(255, 165, 0, 1) 100%)',
        borderRadius: '12px',
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '150px', height: '72px', margin: '0px 20px' }}
        />
      </Link>
      <Stack
        direction="row"
        gap={{ sm: '40px', xs: '20px' }}
        fontFamily="Alegreya"
        fontSize={{ sm: '24px', xs: '18px' }}
        alignItems="center"
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#FFFFFF',
            borderBottom: '3px solid #FFFFFF',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
        >
          Exercises
        </a>
        <Link to="/shop" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          Shop
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          About Us
        </Link>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#FFFFFF',
            color: '#3A1212',
            textTransform: 'none',
            borderRadius: '20px',
            padding: { sm: '8px 16px', xs: '6px 12px' },
            fontSize: { sm: '16px', xs: '14px' },
            '&:hover': {
              backgroundColor: '#FF2625',
            },
          }}
        >
          Login
        </Button>
        <IconButton component={Link} to="/cart" sx={{ color: '#FFFFFF' }}>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
