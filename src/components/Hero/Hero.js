import './Hero.css'; // Import your custom CSS file (optional)
import { Typography, Button, Box, Grid } from '@mui/material';
import Happy from './../../assets/happy_family.jpg'; // Assuming jpg format

function Hero() {
    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    height: '80vh', // Maintain full viewport height by default
                    backgroundImage: `url(${Happy})`,
                    backgroundRepeat: 'no-repeat', // Prevent image tiling
                    backgroundSize: 'cover', // Cover the entire background area
                    backgroundPosition: 'center', // Center the image horizontally and vertically
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    '@media (max-width: 600px)': { // Adjust height for small screens
                        height: '50vh',
                    },
                    '@media (min-width: 601px) and (max-width: 960px)': { // Adjust height for medium screens
                        height: '80vh',
                    },
                    /* '@media (min-width: 961px)': { // Adjust height for large screens
                        height: '100vh',
                    }, */
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
                    md={6} // Adjust width for larger screens
                    lg={4} // Further adjust width for even larger screens
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        color: 'white',
                        position: 'relative',
                        zIndex: 2, // Ensure content is above overlay
                        textAlign: 'left', // Align text to the left
                        padding: 2, // Add padding to the content
                    }}
                >
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { md: '2rem', lg: '3rem' } }}>
                        Mental Health Therapy
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: { md: '.8rem', lg: '1rem' }, textTransform: 'uppercase', letterSpacing: '.3rem', paddingBottom: '15px' }}>
                        For every age, stage & Part of life
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
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

            {/* Typography Grid diplay on small devices */}
            <Grid
                item
                xs={12}
                sm={12}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    color: 'primary',
                    position: 'relative',
                    zIndex: 2, // Ensure content is above overlay
                    textAlign: 'center', // Align text to the left
                    padding: 2, // Add padding to the content
                }}
            >
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}>
                    Mental Health Therapy
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, textTransform: 'uppercase', letterSpacing: '.2rem', paddingBottom: '10px' }}>
                    For every age, stage & Part of life
                </Typography>
                <Button
                    variant="contained"
                    sx={{

                        px: '1rem',
                        fontWeight: 'bold',
                        borderRadius: '25px',
                        textTransform: 'uppercase',

                    }}
                >
                    view our services
                </Button>
            </Grid>
            {/* Typography Grid diplay on small devices ends here */}
        </Box>

    );
}

export default Hero;
