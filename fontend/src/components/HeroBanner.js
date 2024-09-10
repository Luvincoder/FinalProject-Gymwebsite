import React from 'react';
import Slider from 'react-slick';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage1 from '../assets/images/Main1.png';
import HeroBannerImage2 from '../assets/images/Main2.png';
import HeroBannerImage3 from '../assets/images/Main3.png';
import './HeroBanner.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{
        mt: { lg: '100px', xs: '50px' },
        ml: { sm: '50px' },
        p: '20px',
        position: 'relative',
        height: { lg: '600px', xs: '400px' },
        display: 'flex',
        flexDirection: { lg: 'row', xs: 'column' },
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        color: '#e0e0e0',
        borderRadius: '10px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
      }}
      className="hero-banner-container"
    >
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          width: { lg: '600px', md: '500px', sm: '400px', xs: '100%' },
          height: '100%',
          overflow: 'hidden',
          borderRadius: '10px',
          top: '50px', // Significant downward movement - Updated here
          transform: 'translateY(100px)', // Further fine-tuning the downward movement - Updated here
        }}
        className="hero-banner-img"
      >
        <Slider {...settings}>
          <Box
            component="img"
            src={HeroBannerImage1}
            alt="hero-banner"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the image covers the container
            }}
          />
          <Box
            component="img"
            src={HeroBannerImage2}
            alt="hero-banner"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the image covers the container
            }}
          />
          <Box
            component="img"
            src={HeroBannerImage3}
            alt="hero-banner"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the image covers the container
            }}
          />
        </Slider>
      </Box>
      <Box
        sx={{
          flex: 1,
          textAlign: 'left',
          zIndex: 1,
          paddingLeft: { lg: '20px', xs: '0px' },
        }}
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="36px">
          Fitness Club
        </Typography>
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: '64px', xs: '48px' },
            mb: '23px',
            mt: '30px',
          }}
        >
          Eat Sleep Workout<br />
          And Repeat
        </Typography>
        <Typography fontSize="24px" fontFamily="Alegreya" lineHeight="35px">
          Check out the most effective exercises personalized to you
        </Typography>
        <Stack
          sx={{
            alignItems: 'flex-start',
            mt: '45px',
          }}
        >
          <a
            href="#exercises"
            style={{
              textDecoration: 'none',
              width: '200px',
              textAlign: 'center',
              background: '#FF2625',
              padding: '14px',
              fontSize: '22px',
              textTransform: 'none',
              color: 'white',
              borderRadius: '4px',
            }}
          >
            Explore Exercises
          </a>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroBanner;
