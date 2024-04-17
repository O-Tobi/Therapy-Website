import { Box, Typography, Grid, Button } from '@mui/material'
import Happy from './../../assets/happy_family.jpg'
import GuideSteps from './GuideSteps';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Guide() {
  const guides = [
    {
      id: 'number',
      number: '01',
      step: 'finding a therapist match',
      stepDetails: "Contact us to schedule your first appointment. We'll work with you to match you with a therapist who fits your individual needs."
    },
    {
      id: 'number',
      number: '02',
      step: 'scheduling your appointment',
      stepDetails: "You'll receive a welcome email with further instructions on booking with us & completing your intake documentation electronically."
    },

    {
      id: 'number',
      number: '03',
      step: 'begin your journey!',
      stepDetails: "You'll meet with your therapist either in-person or virtually & you've now taken a step towards a joyful stress-free life as it shoud be!"
    },

  ]

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
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
            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
            mx: { md: '20px', lg: '20px' },
            marginTop: '80px',
            px: { md: '60px', lg: '60px' },
            color: 'white',
            position: 'relative',
            py: 2, // Add padding to the content

          }}
        >
          <Typography variant="subtitle1" gutterBottom sx={{ fontSize: { xs: '.5rem', sm: '.5rem', md: '1rem', lg: '1rem' }, textTransform: 'uppercase', letterSpacing: '.3rem', paddingBottom: '15px' }}>ready to get started on your journey</Typography>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '1.5rem', md: '3rem', lg: '3rem' }, textTransform: 'capitalize' }}>3 easy steps to a joyful life</Typography>
        </Grid>
      </Box>


      {/* rendering the overlay */}
      <Box
        sx={{
          backgroundColor: 'yellow',
          width: '80%',
          height: '50%',
          margin: '-100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',

        }}>
        <Box
          sx={{
            backgroundColor: 'red',
            height: '90%',
            width: '95%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'

          }}>

          {guides.map((guide) => (
            <GuideSteps
              key={guide.number}
              number={guide.number}
              step={guide.step}
              stepDetails={guide.stepDetails} />
          ))}

        </Box>


        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'

          }}>
          <Button variant="contained"
            endIcon={<ArrowRightAltIcon />}
            sx={{
              fontSize: { xs: '.5rem', sm: '.5rem', md: '1rem', lg: '1rem' },
              color: 'white',
              px: '1.5rem',
              borderRadius: '25px',
              textTransform: 'uppercase',
              letterSpacing: '.3rem',
              paddingX: '40px',
              paddingY: '10px'

            }}>
            Get to Know us
          </Button>
        </Box>
      </Box>



    </Box>
  )
};

export default Guide;