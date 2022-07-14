import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList  cols={2} rowHeight={280}>
      {itemData.map((item) => (
        <ImageListItem sx={{height: 'auto', width: '100%'}} key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg',
    title: 'Dr Strange',
  },
  {
    img: 'https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg',
    title: 'Dr Strange',
  },
  {
    img: 'https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg',
    title: 'Dr Strange',
  },
  {
    img: 'https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg',
    title: 'Dr Strange',
  },
  {
    img: 'https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg',
    title: 'Dr Strange',
  },
  {
    img: 'https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg',
    title: 'Dr Strange',
  },
  {
    img: 'https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg',
    title: 'Dr Strange',
  },
  {
    img: 'https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg',
    title: 'Dr Strange',
  },
  {
    img: 'https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg',
    title: 'Dr Strange',
  },
  
];
