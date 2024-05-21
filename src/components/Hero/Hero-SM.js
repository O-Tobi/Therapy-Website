import { Box, Grid, Typography } from "@mui/material";
import ButtonComponent from "../Reusable Components/Button-component";

function HeroSm() {
    return (
        <Box sx={{  
            display: {xs: 'block', sm: 'none'},
            px: '20px',
            paddingBottom: '50px'
        }}>
            {/* appearing only on small devices */}
            <Grid container> {/* Add container prop here */}
                <Grid
                    xs={12}
                    >
                    <Typography 
                        variant="h1" 
                        component="h1" 
                        gutterBottom 
                        sx={{ 
                            fontSize: {xs:'38px', sm: '50px', md: '60px', lg: '70px' }, 
                            fontWeight: 'bold',
                            marginBottom: '15px',
                            color: '#008DDA', 
                        }}>
                        Mental Health Therapy
                    </Typography>

                    <Typography 
                        variant="subtitle1" 
                        gutterBottom 
                        sx={{ 
                            fontSize: '13px', 
                            textTransform: 'uppercase', 
                            letterSpacing: '.1rem', 
                            marginBottom: '15px',
                            fontWeight: 'bold',
                        }}>
                        For every age, stage & Part of life
                    </Typography>

                    <Typography 
                        variant="subtitle2" 
                        gutterBottom 
                        sx={{ 
                            fontSize: {xs:'13px',sm: '14px', md: '15px', lg: '16px'}, 
                            color: 'text.secondary',
                            marginBottom: '20px'
                            }}>
                        We employ unique and fun new mental health-based therapies for an explorative approach towards healing.
                    </Typography>

                    <ButtonComponent
                        buttonName="view our services"
                        variant="contained"
                        buttonColor="white"
                    />

                </Grid>
            </Grid>
        </Box>
    );
}

export default HeroSm;
