import { Box, Typography } from "@mui/material";
import '../css/style.css';
export default function TravelTips() {
  return (
    <Box sx={{mt:"50px"}}>
      <Typography variant="h5" fontWeight={800} sx={{ fontSize: "1.5rem" }}>
      Top attractions in Yangon (Rangoon)
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box className="exp_items">
          <img src="/images/ShweDagon.jpg"/>
          <Typography variant="h6" sx={{fontSize:"1rem"}}>Shwedagon Pagoda</Typography>
        </Box>
        <Box className="exp_items">
          <img src="/images/NationalMuseum.jpg"/>
          <Typography variant="h6" sx={{fontSize:"1rem"}}>National Museum</Typography>
        </Box>
        <Box className="exp_items">
          <img src="/images/Kandawgyi.jpg"/>
          <Typography variant="h6" sx={{fontSize:"1rem"}}>Kandawgyi Park</Typography>
        </Box>
        <Box className="exp_items">
          <img src="/images/ChinaTown.jpg"/>
          <Typography variant="h6" sx={{fontSize:"1rem"}}>Yangon Chinatown</Typography>
        </Box>
      </Box>
    </Box>
  );
}
