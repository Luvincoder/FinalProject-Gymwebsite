import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  if (!exerciseDetail || Object.keys(exerciseDetail).length === 0) return null;

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: '10px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image icon-animation"
        style={{ borderRadius: '10px' }}
      />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography
          sx={{ fontSize: { lg: '64px', xs: '30px' }, color: '#e0e0e0' }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: '24px', xs: '18px' }, color: '#b0b0b0' }}
        >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction="row"
            gap="24px"
            alignItems="center"
          >
            <Button
              sx={{
                background: '#252525',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                '&:hover': {
                  background: '#ff2625',
                },
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="icon-animation"
                style={{ width: '50px', height: '50px' }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: '30px', xs: '20px' }, color: '#e0e0e0' }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
