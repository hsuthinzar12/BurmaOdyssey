import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import TravelTips from "./TravelTips";
import Search from "./Search";
import "../css/style.css";

function App() {
  return (
    <Box className="wrap">
              <Header />
      <Box className="inner">

        <Search />
        <TravelTips />
      </Box>
    </Box>
  );
}

export default App;
