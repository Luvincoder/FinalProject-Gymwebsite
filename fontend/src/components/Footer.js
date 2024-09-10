import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0d0d0d',
        color: '#e0e0e0',
        padding: '40px 0',
        mt: 'auto',
        boxShadow: '0px -1px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
              We provide the best workout plans and guides to help you stay fit
              and healthy. Join us and transform your life!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              href="/"
              color="inherit"
              variant="body2"
              display="block"
              sx={{ my: 1, color: '#ff2625' }}
            >
              Home
            </Link>
            <Link
              href="/exercises"
              color="inherit"
              variant="body2"
              display="block"
              sx={{ my: 1, color: '#ff2625' }}
            >
              Exercises
            </Link>
            <Link
              href="/contact"
              color="inherit"
              variant="body2"
              display="block"
              sx={{ my: 1, color: '#ff2625' }}
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              color="inherit"
              variant="body2"
              display="block"
              sx={{ my: 1, color: '#ff2625' }}
            >
              About
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" gap="20px">
              <Link href="https://facebook.com" color="inherit">
                <Facebook
                  sx={{ fontSize: '40px', color: '#ff2625' }}
                  className="icon-animation"
                />
              </Link>
              <Link href="https://twitter.com" color="inherit">
                <Twitter
                  sx={{ fontSize: '40px', color: '#ff2625' }}
                  className="icon-animation"
                />
              </Link>
              <Link href="https://instagram.com" color="inherit">
                <Instagram
                  sx={{ fontSize: '40px', color: '#ff2625' }}
                  className="icon-animation"
                />
              </Link>
              <Link href="https://linkedin.com" color="inherit">
                <LinkedIn
                  sx={{ fontSize: '40px', color: '#ff2625' }}
                  className="icon-animation"
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={5}>
          <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
            © {new Date().getFullYear()} Workout App. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
