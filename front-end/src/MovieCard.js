import * as React from "react";
import TinderCard from "react-tinder-card";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const onSwipe = (direction) => {
  alert("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

export default function MovieCard() {
  const [value, setValue] = React.useState();
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
