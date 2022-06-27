import TinderCard from 'react-tinder-card'
import { Card, Box, Avatar, Chip, Switch } from '@mui/material'
import React from 'react'

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}

// const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US");
// const jsonData = await response.json();

// console.log(jsonData);


class MovieCard extends React.Component {
  render() {
    return (
      <TinderCard
        onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')}>
        <Card>
          <Box sx={{ p: 2, display: 'flex' }}>
            <Avatar variant="rounded" src="avatar1.jpg" />
          </Box>
          <Chip>Active account</Chip>
          <Switch />
        </Card>
      </TinderCard>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header center-screen">
        {/* {data.map((user) => ( */}
        <MovieCard />
        {/* ))} */}
      </header>
    </div >
  );
}

export default App;
