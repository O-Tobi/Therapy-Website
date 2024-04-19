import { Box, Grid,Typography, Button } from "@mui/material";

function HeroSm () {
    return (
        <Box>
            {/* appearing only on small devices */}
            <Grid
                    item
                    xs={12}
                    sx={{ 
                        height: {sm:'0px'}, 
                    
                    visibility: {xs: 'visible', sm: 'hidden'} 
                    }}>
                    <Typography 
                    variant="h1" 
                    component="h1" 
                    gutterBottom 
                    sx={{ 
                        fontSize: {xs:'38px', sm: '50px', md: '60px', lg: '70px' }, fontWeight: 'bold' }}>
                        Mental Health Therapy
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: {xs:'13px',sm: '15px', md: '16px', lg: '17px' }, textTransform: 'uppercase', letterSpacing: '.3rem', paddingBottom: '15px' }}>
                        For every age, stage & Part of life
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom sx={{ fontSize: {xs:'13px',sm: '14px', md: '15px', lg: '16px'} }}>We employ unique and fun new mental health-based therapies for an explorative approach towards healing.</Typography>

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
        </Box>
    )
}

export default HeroSm;