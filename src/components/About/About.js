import { Box, Typography, Container, } from "@mui/material";
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
                        letterSpacing: { xs: '.2rem', sm: '.3rem' },
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
                        fontSize: { xs: '2rem', sm: '3rem', md: '5rem', lg: '5rem' },
                        marginBottom: '10px',
                    }}
                >
                    Overcome the stress in your life at any stage.
                </Typography>
                
                <Typography>
                    Be it early childhood development years or difficulty navigating intermarital issues, we have experience utilizing various modalities such as Cognitive Behavioral Therapy, Gottman Method Couples Therapy, Play Therapy and Equine Facilitated Psychotherapy to help guide you towards leading your best life
                </Typography>
            </Box>



        </Container>

     </Box>
    )
};

export default About;