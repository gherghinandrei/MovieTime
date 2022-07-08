import * as React from "react";
import { Paper, Stack, IconButton, Typography, Avatar } from "@mui/material/";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import RecommendIcon from "@mui/icons-material/Recommend";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// const names = [Andrei, Stolo, Marian, Maria, Vaida, Minodora, Su, Cristina, Ioana, Gigel, Salam, Tzanca]

class Friend extends React.Component {
  render() {
    return (
      <Paper sx={{ p: 1, m: 1 }}>
        <Stack spacing={1} direction="row" alignItems="center">
          <Avatar src={this.props.avatar} />
          <Typography sx={{ flexGrow: 1 }}>{this.props.name}</Typography>
          <IconButton size="medium" color="warning" aria-label="match">
            <StarBorderIcon fontSize="large" />
          </IconButton>
          <IconButton size="medium" color="error" aria-label="match">
            <ThumbDownOffAltIcon fontSize="large" />
          </IconButton>
          <IconButton size="medium" color="primary" aria-label="match">
            <RecommendIcon fontSize="large" />
          </IconButton>
          <IconButton size="medium" color="secondary" aria-label="match">
            <JoinInnerIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Paper>
    );
  }
}

export default function Friends() {
  return (
    <Stack>
      <Friend
        avatar="https://evolutionsports.nl/wp-content/uploads/2020/10/Martial-Art-stijlen-die-als-inspiraatsie-diende-voor-Avatar-The-Last-Airbender.jpeg"
        name="Andrei"
      />
    </Stack>
  );
}
