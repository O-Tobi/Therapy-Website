import { Box, Typography, Container, Grid } from "@mui/material";
import ReusableHero from "../../Reusable Components/ReusableHero";
import Happy from './../../assets/happy_family.jpg'

function About () {
    return (
     <Box sx={{
        marginBottom: "100px"
     }}>

      <ReusableHero
      img= {Happy}
      title= "meet our therapists"
      mainInfo= "Guiding you towards a joyful stress-free life." />

<Container
            sx={{
                marginTop: { xs: '40px', sm: '60px', md: '80px', lg: '80px' },
                textAlign: 'center',
            }}
        >
            <Box
                sx={{

                    width: { xs: '100%', md: '75%', lg: '75%', xl: '50%' }, // Adjust width based on breakpoints
                    marginLeft: 'auto',
                    marginRight: 'auto', // Center the box horizontally

                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '12px', sm: '17px' },
                        letterSpacing: { xs: '.1rem', sm: '.2rem' },
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                        
                    }}
                >
                    our main mission at ctc is to help you
                </Typography>
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        textAlign: 'center',
                        fontWeight: '400',
                        color: '#008DDA',
                        fontSize: { xs: '35px', sm: '60px', md: '60px', lg: '60px' },
                        marginBottom: '10px',
                    }}
                >
                    Overcome the stress in your life at any stage.
                </Typography>
                
                <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: { xs: '15px', sm: '17px', md: '17px', lg: '17px' },
                    lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' }
                }}>
                    Be it early childhood development years or difficulty navigating intermarital issues, we have experience utilizing various modalities such as Cognitive Behavioral Therapy, Gottman Method Couples Therapy, Play Therapy and Equine Facilitated Psychotherapy to help guide you towards leading your best life
                </Typography>
            </Box>

            <Grid container>
                <Grid item xs={12} sm={6} md={6} lg= {6}>
                    <Box>
                        this is for the image
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg= {6}>
                    <Box>
                        this is for the writeup
                    </Box>
                </Grid>

            </Grid>

        </Container>

     </Box>
    )
};

export default About;