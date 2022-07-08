import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";
import Friends from "./Friends";

export default function App2() {
  return (
    <Box sx={{ justifyItems: "center" }}>
      <CssBaseline />
      <Stack>
        {/* <MovieCard /> */}
        <Friends/>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <NavBar />
        </Paper>
      </Stack>
    </Box>
  );
}
