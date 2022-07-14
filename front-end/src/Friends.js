import * as React from "react";
import {
  Paper,
  Stack,
  IconButton,
  Typography,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
  Menu,
  MenuItem,
} from "@mui/material/";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import RecommendIcon from "@mui/icons-material/Recommend";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// const names = [Andrei, Stolo, Marian, Maria, Vaida, Minodora, Su, Cristina, Ioana, Gigel, Salam, Tzanca]

class Friend extends React.Component {
  render() {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Paper sx={{p:1, m:1, minWidth:"80px"}}>
            <Stack
              spacing={1}
              direction="column"
              alignItems="center"
              {...bindTrigger(popupState)}
            >
              <Avatar src={this.props.avatar} />
              <Typography>{this.props.name}</Typography>
            </Stack>
            </Paper>
           
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>
                <IconButton color="warning" aria-label="match">
                  <StarBorderIcon />
                </IconButton>
                Liked
              </MenuItem>
              <MenuItem onClick={popupState.close}>
              <IconButton color="error" aria-label="match">
            <ThumbDownOffAltIcon />
          </IconButton>
                Disliked
                </MenuItem>
              <MenuItem onClick={popupState.close}>
              <IconButton color="primary" aria-label="match">
            <RecommendIcon />
          </IconButton>
                Recommended
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                <IconButton color="secondary" aria-label="match">
            <JoinInnerIcon />
          </IconButton>
                Connect
                </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>

    );
  }
}

export default function Friends() {
  return (
    <Grid
      container
      xs={12}
      sm={12}
      lg={12}
      spacing={1}
      direction="column"
      alignItems="center"
    >
      <Grid item xs={6} sm={6} lg={6}>
        <Friend
          avatar="https://evolutionsports.nl/wp-content/uploads/2020/10/Martial-Art-stijlen-die-als-inspiraatsie-diende-voor-Avatar-The-Last-Airbender.jpeg"
          name="Andrei"
        />
      </Grid>
    </Grid>
  );
}
