import './Hero.css'; // Import your custom CSS file (optional)
import { Typography, Button, Box } from '@mui/material';
import Happy from './../../assets/happy_family.jpg'; // Assuming jpg format

function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh', // Maintain full viewport height
        backgroundImage: `url(${Happy})`,
        backgroundRepeat: 'no-repeat', // Prevent image tiling
        backgroundSize: 'cover', // Cover the entire background area
        backgroundPosition: 'center', // Center the image horizontally and vertically
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Dark overlay (optional) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust opacity for desired darkness
          zIndex: 1, // Ensure overlay is behind content
        }}
      />


       {/*  use box to set the content to the right and also set it's dimension */}

      {/* Content */}
      <Box
        sx={{
          color: 'white',
          position: 'relative',
          zIndex: 2, // Ensure content is above overlay
          textAlign: 'center', // Center text horizontally
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom color="textPrimary">
          Welcome to our Website
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="textPrimary">
          Discover the best therapy services here!
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;
