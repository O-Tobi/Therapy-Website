import {Box, Typography,Grid} from '@mui/material'
import Happy from './../../assets/happy_family.jpg'

function Guide () {
    return (
      <Box 
      sx={{
        display: 'flex',
        alignItems:'center',
        flexDirection: 'column',
        height: '800px',
        marginY: '35px',
        
      }}>
        <Box 
        sx={{
        backgroundImage: `url(${Happy})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '50%'
 
        }}>

          <Grid
          item
          xs={12}
          sm={12}
          md={4} // Adjust width for larger screens
          lg={4} // Further adjust width for even larger screens
          sx={{
              textAlign: {xs: 'center', sm:'center',md: 'left', lg: 'left'},
              mx: {md: '20px', lg: '20px'},
              marginTop: '80px',
              px: {md: '60px', lg: '60px'},
              color: 'white',
              position: 'relative',
              py: 2, // Add padding to the content
            
          }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: {xs:'.5rem',sm: '.5rem', md: '1rem', lg: '1rem' }, textTransform: 'uppercase', letterSpacing: '.3rem', paddingBottom: '15px' }}>ready to get started on your journey</Typography>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: {xs:'1.5rem',sm: '1.5rem', md: '3rem', lg: '3rem' }, textTransform: 'capitalize'}}>3 easy steps to a joyful life</Typography>
          </Grid>
        </Box>

        <Box
        sx={{
          backgroundColor: 'yellow',
          width: '80%',
          height: '40%',
          margin: '-100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          
        }}>
          <Box
          sx = {{
            backgroundColor: 'red',
            height: '90%',
            width: '95%',
            
          }}>
            <Box>
              <Grid>
                
              </Grid>
              
            </Box>

          </Box>
          
        </Box>

      </Box> 
    )
};

export default Guide;