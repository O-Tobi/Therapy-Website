import { Container, Box, Typography, Grid, Divider} from "@mui/material";

function Therapists () {
    return (
        <Container>
            <Grid>
            <Box>
                <Typography variant="h3" sx={{
                    color: '#008DDA'
                }}>
                    Meet The Therapists
                </Typography>
            </Box>
            <Divider
             sx={{
                height: 10,
                color: '##008DDA',
                
            }}/>
            <Box>
                <Typography>
                    Finding the right fit ina therapist is essential to the therapeutic process. Our therapists are trained in: Play Therapy, Equine-Facilitated Psychotherapy, Cognitive Behavioural Therapy, Ecosystemic Structural Family Therapy, Yoga, Triple P Positive Parenting, Gottman Method Couples Therapy and much more! 
                </Typography>
            </Box>
            </Grid>
            
        </Container>
    )
};

export default Therapists;