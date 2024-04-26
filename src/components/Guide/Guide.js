import { Box, Typography, Grid, Button } from '@mui/material'
import Happy from './../../assets/happy_family.jpg'
import GuideSteps from './GuideSteps';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



function Guide() {
  const guides = [
    {
      number: '01',
      step: 'finding a therapist match',
      stepDetails: "Contact us to schedule your first appointment. We'll work with you to match you with a therapist who fits your individual needs."
    },
    {
      number: '02',
      step: 'scheduling your appointment',
      stepDetails: "You'll receive a welcome email with further instructions on booking with us & completing your intake documentation electronically."
    },

    {
      number: '03',
      step: 'begin your journey!',
      stepDetails: "You'll meet with your therapist either in-person or virtually & you've now taken a step towards a joyful stress-free life!"
    },

  ]

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: {xs: '1000px', sm: '600px', md:'800px', lg: '800px'},
        marginTop: '30px',
        

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
            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' },
            mx: { md: '20px', lg: '20px' },
            marginTop: {xs: '30px', sm:'60px', md: '80px', lg: '80px' },
            px: {xs:'10px', sm:'60px', md: '60px', lg: '60px' },
            color: 'white',
            position: 'relative',
            py: {xs:'10px', sm:'40px', md: '50px', lg: '60px' }, // Add padding to the content
            
            

          }}
        >
          <Typography variant="subtitle1" gutterBottom sx={{ fontSize: { xs: '.5rem', sm: '.5rem', md: '1rem', lg: '1rem' }, textTransform: 'uppercase', letterSpacing: '.3rem', paddingBottom: '15px' }}>ready to get started on your journey</Typography>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '1.5rem', md: '3rem', lg: '3rem' }, textTransform: 'capitalize' }}>3 easy steps to a joyful life</Typography>
        </Grid>
      </Box>


      {/* rendering the overlay */}
      <Box
        sx={{
          backgroundColor: 'white',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          width:  '80%',
          /* height: '50%', */
          margin: {xs: '-50px', sm: '-70px', md:'-80px', lg: '-80px'},
          alignItems: 'center',
          justifyItems: 'center',
          flexDirection: 'column',
          py: '1%',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)',

          

        }}>


        {guides.map((guide) => (
          <GuideSteps
            key={guide.number}
            number={guide.number}
            step={guide.step}
            stepDetails={guide.stepDetails} />
        ))}


      </Box>

      {/* Button below GuideSteps */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',

        }}>
        <Button variant="contained"
          endIcon={<ArrowRightAltIcon />}
          sx={{
            fontSize: { xs: '.7rem', sm: '.7rem', md: '1rem', lg: '1rem' },
            color: 'white',
            px: '1.5rem',
            borderRadius: '25px',
            textTransform: 'uppercase',
            letterSpacing: { xs: '.2rem', sm: '.3rem', md: '.4rem', lg: '.4rem' },
            paddingX: { xs: '20px', sm: '20px', md: '25px', lg: '40px' },
            paddingY: { xs: '8px', sm: '8px', md: '10px', lg: '10px' },

          }}>
          Get to Know us
        </Button>
      </Box>

    </Box>
  )
};

export default Guide;