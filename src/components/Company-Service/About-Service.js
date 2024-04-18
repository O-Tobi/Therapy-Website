import { Container, Typography, Box } from "@mui/material";
import HeroSm from "../Hero/Hero-SM";


function AboutService() {
    return (
        <Container
            sx={{
                marginTop: { xs: '20px', md: '40px', lg: '50px' },
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
                <HeroSm />
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        textAlign: 'center',
                        fontWeight: '350',
                        color: '#008DDA',
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '5rem', lg: '5rem' },
                        marginBottom: '10px'
                    }}
                >
                    A safe therapeutic environment is important
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '1rem' },
                        letterSpacing: { xs: '.2rem', sm: '.5rem' },
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        marginBottom: '10px'
                    }}
                >
                    As you make steps towards change
                </Typography>
                <Typography>
                    We care about you and your ability to thrive! We're a proud believer in positive psychology and the ability to work past all of life's curveballs. We provide mental health services to children, adolescents, adults, couples, and families. Our mission is to help clients overcome the stress in their lives at any stage.
                </Typography>
            </Box>



        </Container>

    )
};

export default AboutService;