import TinderCard from "react-tinder-card";
import { Card, Box, Avatar, Chip, Switch, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";
import AdBanner from "./AdBanner";

// const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US");
// const jsonData = await response.json();

// console.log(jsonData);

function App() {
  return (
    <Stack  className="App center-screen">
      <AdBanner/>
      <MovieCard xs={12} sm={12} lg={12}/>
      <Divider />
      <NavBar xs={12} sm={12} lg={12}/>
    </Stack>
  );
}

export default App;
