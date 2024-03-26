import { Typography, Button, Box, Grid } from '@mui/material';
import Happy from './../../assets/happy_family.jpg'; // Assuming jpg format

function Hero() {
    return (
        
        <Box
                sx={{
                    position: 'relative',
                    height: {xs: '50vh', sm: '50vh', md: '80vh', lg: '80vh'}, // Maintain full viewport height by default
                    backgroundImage: `url(${Happy})`,
                    backgroundRepeat: 'no-repeat', // Prevent image tiling
                    backgroundSize: 'cover', // Cover the entire background area
                    backgroundPosition: 'center', // Center the image horizontally and vertically
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: {xs: 'center', sm: 'center', md: 'flex-start', lg:'flex-start'},
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
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity for desired darkness
                        zIndex: 1, // Ensure overlay is behind content
                    }}
                />


                {/* Content */}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={8} // Adjust width for larger screens
                    lg={8} // Further adjust width for even larger screens
                    sx={{
                        textAlign: {xs: 'center', sm:'center',md: 'left', lg: 'left'},
                        px: {md: '60px', lg: '60px'},
                        color: 'white',
                        position: 'relative',
                        zIndex: 2, // Ensure content is above overlay
                        py: 2, // Add padding to the content
                    }}
                >
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: {xs:'1.5rem',sm: '1.5rem', md: '3rem', lg: '3rem' } }}>
                        Mental Health Therapy
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: {xs:'.5rem',sm: '.5rem', md: '1rem', lg: '1rem' }, textTransform: 'uppercase', letterSpacing: '.3rem', paddingBottom: '15px' }}>
                        For every age, stage & Part of life
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            fontSize: {xs:'.5rem',sm: '.5rem', md: '1rem', lg: '1rem' },
                            color: 'white',
                            px: '1.5rem',
                            fontWeight: 'bold',
                            borderRadius: '25px',
                            textTransform: 'uppercase',
                            
                        }}
                    >
                        view our services
                    </Button>
                </Grid>

            </Box >

    

    );
}

export default Hero;
