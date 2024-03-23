import './Hero.css';
import { Container, Typography, Button, Box } from '@mui/material';
import Happy from './../../assets/happy_family.jpg'


function Hero() {
    return(
        <Box
      maxWidth="xl"
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Happy})`,
        backgroundSize: 'cover',
        color: 'white',
        textAlign: 'center',
      }}
    >
        <Typography variant="h1" component="h1" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="h4" component="p" gutterBottom>
        Explore our amazing features and services.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
    )
};

export default Hero;