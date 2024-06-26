import { Typography, Box, Grid } from '@mui/material';
import Happy from './../../assets/happy_family.jpg';
import ButtonComponent from '../Reusable Components/Button-component';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <Box
            sx={{
                position: 'relative',
                height: {xs: '40vh', sm: '90vh', md: '100vh', lg: '100vh'},
                backgroundImage: `url(${Happy})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: {xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start'},
                flexDirection: 'column',
                margin: {xs: '10px', sm: '10px', md: '10px', lg: '10px'}
            }}
        >
            {/* Dark overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                    visibility: {xs: 'hidden', sm: 'visible'}
                }}
            />

            {/* Content */}
            <Grid
                container
                justifyContent={{ sm: 'flex-start', md: 'flex-start', lg: 'flex-start'}}
                alignItems="center"
                sx={{
                    zIndex: 2,
                    py: 2,
                    textAlign: { sm: 'left', md: 'left', lg: 'left'},
                }}
            >
                <Grid
                    item
                    sm={8}
                    md={8}
                    lg={6}
                    sx={{ px: {sm: '50px', md: '60px', lg: '60px'}, 
                    color: 'white',
                    visibility: {xs: 'hidden', sm: 'visible'}  
                    }}>
                    <Typography 
                    variant="h1" 
                    component="h1" 
                    gutterBottom 
                    sx={{ 
                        fontSize: {xs:'38px', sm: '50px', md: '60px', lg: '70px' }, 
                        fontWeight: 'bold' 
                        }}>
                        Mental Health Therapy
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: {xs:'13px',sm: '15px', md: '16px', lg: '17px' }, textTransform: 'uppercase', letterSpacing: '.3rem', paddingBottom: '15px' }}>
                        For every age, stage & Part of life
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom sx={{ fontSize: {xs:'13px',sm: '14px', md: '15px', lg: '16px'} }}>We employ unique and fun new mental health-based therapies for an explorative approach towards healing.</Typography>

                    <ButtonComponent
                        buttonName="view our services"
                        variant="contained"
                        buttonColor="white"
                        buttonComponent = {Link}
                        buttonLink = "/services"
                    />

                </Grid>

            </Grid>
        </Box>
    );
}

export default Hero;
