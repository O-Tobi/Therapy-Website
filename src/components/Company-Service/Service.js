import { Container, Box, Typography, Grid } from "@mui/material";

function Service () {
    return (
        <Container sx={{
            marginTop: {xs: '20px', md: '40px', lg: '50px'},
        }}>
            <Box>
                <Typography
                variant="h1"
                component="h1"
                sx= {{
                   textAlign: 'center',
                   fontWeight: '350',
                   color: '#008DDA',
                   fontSize: {xs:'2.5rem', sm:'3rem', md: '5rem', lg: '5rem'},

                }}>
                A safe therapeutic environment is important
                </Typography>
                <Typography
                variant="subtitle"
                component="h2">

                    As you make steps towards change
                </Typography>
                <Typography>
                    We care about you and your ability to thrive! We're a proud believer in positive psychology and the ability to work past all of life's curveballs. We provide mental health services to children, adolescents, adults, couples, and families. Our mission is to help clients overcome the stress in their lives at any stage.
                </Typography>

                <Grid>

                </Grid>
            </Box>
        </Container>
    )
};

export default Service;