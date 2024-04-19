import {Grid, Typography, Box } from "@mui/material";

function TherapistIntro () {
    return (
        
        <Grid container spacing={.5}>
          <Grid item xs={12} sm={12}  md={4} lg={4}>
            <Typography 
            variant="h3" 
            sx={{ 
              color: '#008DDA', 
              paddingLeft: {md: '60px', lg:'120px'}, 
              paddingTop: {md: '10px', lg:'10px'},
              fontSize : {xs: '35px'}, 
              textAlign: {xs: 'center'},
              marginBottom: {xs: '20px',}
            }}>
              Meet The Therapists
            </Typography>
          </Grid>
      
        <Grid item xs={12} sm={12} md={1} lg={1}>
          {/* this is the divider */}
            <Box
            sx={{
                backgroundColor: '#FB6D48',
                width: {xs: '90vw', sm: '90vw', md: '.5vw', lg: '.5vw'},
                height: {xs: '5px', sm: '5px', md: '140px', lg: '120px'},
                marginBottom: {xs: '20px',},
                
            }}></Box>            
        </Grid>
      
          <Grid item xs={12} sm={12}  md={7} lg={7}>
            <Typography sx={{
                paddingRight: {md: '60px', lg:'60px'},
                paddingTop: {md: '10px', lg:'10px'},
                px: {xs: '20px', sm: '20px'}
            }}>
              Finding the right fit in a therapist is essential to the therapeutic process. 
              Our therapists are trained in: Play Therapy, Equine-Facilitated Psychotherapy, 
              Cognitive Behavioural Therapy, Ecosystemic Structural Family Therapy, Yoga, 
              Triple P Positive Parenting, Gottman Method Couples Therapy and much more!
            </Typography>
          </Grid>
        </Grid>
        
    )
};

export default TherapistIntro;