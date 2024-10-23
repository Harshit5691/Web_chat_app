import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";


const Home = () => {
  return (
    <Box height={"100%"} display="flex" alignItems="center" justifyContent="center">
      <Typography 
        p={"2rem"} 
        variant="h5" 
        textAlign={"center"} 
        sx={{ 
          fontFamily: 'Great Vibes', // Change to your desired font
          fontWeight: 400, // Optional: set the font weight
          fontSize: '40px',
          color: 'antiquewhite'
          // Add any other styles as needed
        }}
      >
        Bringing Conversations Together, Anytime, Anywhere.
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
