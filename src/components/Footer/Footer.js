import { Box, Typography, Container, Grid } from "@mui/material";

function Footer () {
    return (
        <Box
        sx={{
            backgroundColor: '#008DDA',
            /* paddingY: '30px',
            paddingX: '60px',
            marginTop: '50px', */
        }}>
            <Container sx={{
            paddingY: '30px',
        }}>
                <Grid container>
                    <Grid>
                        <Typography variant="h4">Connect With Us</Typography>

                        <Typography>6849 Fairview Road Suite 702 Charlotte, NC 28210</Typography>

                        <Typography>725 Jackson Rd Salisbury, NC 28146 </Typography>

                        <Typography>1913 J N Pease Place Ste 101 Charlotte, NC 28262 </Typography>

                    </Grid>

                    <Grid>
                    <Typography variant="h4">Contact Us</Typography>

                    <Typography> info@jenkinscreativecounselingcenter.com</Typography>
                    <Typography>Call Us: 980-308-4500 Fax: 980-458-6037  </Typography>
                    </Grid>
                </Grid>

                
            </Container>
        </Box>
    )
};

export default Footer;