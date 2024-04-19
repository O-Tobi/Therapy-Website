import { Box, Grid, Typography, Button } from "@mui/material";

function HeroSm() {
    return (
        <Box sx={{ 
            height: {sm:'0px'}, 
            visibility: {xs: 'visible', sm: 'hidden'},
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

                    <Button
                        variant="contained"
                        sx={{
                            fontSize: '11px',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '25px',
                            textTransform: 'uppercase',
                            px: '2rem',
                            py: '.8rem',
                            marginTop: '11px',
                        }}
                    >
                        view our services
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HeroSm;
