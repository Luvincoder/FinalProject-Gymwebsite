import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#2b2b2b',
        color: '#e0e0e0',
        borderBottomLeftRadius: '20px',
        width: '200px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '#3b3b3b',
        },
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        className="icon-animation"
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize="20px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#e0e0e0"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
