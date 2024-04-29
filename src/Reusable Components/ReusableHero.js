import { Box, Grid, Typography } from "@mui/material";
import Happy from './../assets/happy_family.jpg'
import FooterQuotes from "../components/Footer/Footer-quotes";

/* props
- image
*/

function ReusableHero (props) {
    return (
        <Box
            sx={{
                position: 'relative',
                height: {xs: '70vh', sm: '90vh', md: '100vh', lg: '100vh'},
                backgroundImage: `url(${Happy})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '10px'
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
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    zIndex: 2,
                    py: 2,
                    textAlign: "center"
                }}
            >
                <Grid
                    item
                    sm={8}
                    md={8}
                    lg={6}
                    sx={{ px: {sm: '50px', md: '60px', lg: '60px'}, 
                    color: 'white',  
                    }}>
                    
                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: {xs:'13px',sm: '15px', md: '16px', lg: '17px' }, textTransform: 'uppercase', letterSpacing: '.1rem',  }}>
                        meet our therapists
                    </Typography>


                    <Typography 
                    variant="h1" 
                    component="h1" 
                    gutterBottom 
                    sx={{ 
                        fontSize: {xs:'30px', sm: '45px', md: '55px', lg: '65px' }, 
                        }}>
                        Guiding you towards a joyful stress-free life.
                    </Typography>

                    

                    <Typography variant="subtitle2" gutterBottom sx={{ fontSize: {xs:'13px',sm: '14px', md: '15px', lg: '16px'} }}>
                        <FooterQuotes/>
                    </Typography>

                </Grid>
                    
            </Grid>
        </Box>
    )
};

export default ReusableHero;