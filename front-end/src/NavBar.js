import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import JoinRightIcon from "@mui/icons-material/JoinRight";
import FaceIcon from "@mui/icons-material/Face";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
export default function NavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Explore" icon={<TravelExploreIcon />} />
      <BottomNavigationAction label="Library" icon={<LocalMoviesIcon />} />
      <BottomNavigationAction label="Watch" icon={<JoinRightIcon />} />
      <BottomNavigationAction label="Friends" icon={<PeopleAltIcon />} />
      <BottomNavigationAction label="Profile" icon={<FaceIcon />} />
    </BottomNavigation>
  );
}
