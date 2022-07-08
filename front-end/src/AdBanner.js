import * as React from 'react';
import Box from '@mui/material/Box';

export default function AdBanner() {
  return (
    <Box sx={{ position: 'fixed', top: '0', width: '100%', height: '100px' }}>
      <img
            src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/06/pokemon_go_fest_hero_image_new.jpg"
            alt="adBanner"
            loading="lazy"
            height= '100px' 
            width= '100%'
          />
          
    </Box>
  );
}