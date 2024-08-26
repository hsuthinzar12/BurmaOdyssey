import { Box, Typography, Paper, InputBase, IconButton } from "@mui/material";

import { Search as SearchIcon } from "@mui/icons-material";

import Icn_QMark from "/images/QuestionMark.png";

export default function Search() {
  return (
    <Box>
      <Typography variant="h1"  sx={{ textAlign: "center", fontSize: "3rem", my: "30px" }}>
        Where to
        <img src={Icn_QMark} alt="Question Mark" style={{ width: 50 }} />
      </Typography>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 600,
          m: "0 auto",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      
    </Box>
  );
}
