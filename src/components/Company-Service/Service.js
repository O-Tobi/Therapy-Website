import { Container, Box, Typography, Grid } from "@mui/material";

function Service () {
    return (
        <Container sx={{
            marginTop: '60px',
        }}>
            <Box>
                <Typography
                variant="h1"
                component="h1"
                sx= {{
                   textAlign: 'center',
                   fontWeight: '200',
                   color: '#496989'

                }}>
                A safe therapeutic environment is important
                </Typography>
                <Typography>
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