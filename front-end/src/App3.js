import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Tabs, Tab, Typography, Grid, Paper} from '@mui/material/';
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import JoinRightIcon from "@mui/icons-material/JoinRight";
import FaceIcon from "@mui/icons-material/Face";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MovieCard from "./MovieCard"
import Movies from "./Movies"
import Friends from "./Friends"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container >
      <Grid item>
      <TabPanel value={value} index={0}>
        <MovieCard/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Movies/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Friends/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
      </Grid>
      <Grid xs={12} item sx={{ position: "fixed", bottom: 0, left: 0, right: 0}}>
        <Paper>
        <Tabs value={value} onChange={handleChange} aria-label="Bottom menu">
          <Tab sx={{minWidth:'78px'}} icon={<TravelExploreIcon />} />
          <Tab sx={{minWidth:'78px'}} icon={<LocalMoviesIcon />} />
          <Tab sx={{minWidth:'78px'}} icon={<JoinRightIcon />} />
          <Tab sx={{minWidth:'78px'}} icon={<PeopleAltIcon />} />
          <Tab sx={{minWidth:'78px'}} icon={<FaceIcon />} />
        </Tabs>
        </Paper>
      </Grid>
    </Grid>
  );
}
