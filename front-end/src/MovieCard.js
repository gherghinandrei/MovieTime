import * as React from "react";
import TinderCard from "react-tinder-card";
import {Typography, CardMedia, CardContent, CardActions, Card, Button, IconButton,Snackbar} from "@mui/material/";
const onSwipe = (direction) => {
  alert("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

export default function MovieCard() {
  const [value, setValue] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen("fooBar")}
      preventSwipe={["right", "left", "up", "down"]}
    >
      <Card>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ align: "left" }}
        >
          Doctor Strange
        </Typography>
        <CardMedia
          component="img"
          image="https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg"
          alt="movie poster"
          sx={{ maxWidth: "100%", height: "auto" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            While on a journey of physical and spiritual healing, a brilliant
            neurosurgeon is drawn into the world of the mystic arts.
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /> */}
        </CardActions>
      </Card>
    </TinderCard>
    
  );
}
