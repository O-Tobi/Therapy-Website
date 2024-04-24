import { Box, Typography, Container, Grid } from "@mui/material";
import FooterCard from './FooterCard';
import FooterQuotes from "./Footer-quotes";
import wellnessImg from './../../assets/wellness2.jpg'

function Footer() {
    const footerCardProps = [
        {
            id: '1',
            footerImg: `${wellnessImg}`,
            footerAlt: "test Alt"
        },
        {
            id: '2',
            footerImg: `${wellnessImg}`,
            footerAlt: "test Alt"
        },
        {
            id: '3',
            footerImg: `${wellnessImg}`,
            footerAlt: "test Alt"
        },
        {
            id: '4',
            footerImg: `${wellnessImg}`,
            footerAlt: "test Alt"
        },
        {
            id: '5',
            footerImg: `${wellnessImg}`,
            footerAlt: "test Alt"
        },
        {
            id: '6',
            footerImg: `${wellnessImg}`,
            footerAlt: "test Alt"
        },

    ]

    
    /* seperate the quote into a different Component */

    return (
        <Box
            sx={{
                paddingTop: '30px',
                paddingBottom: '30px',
            }}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4} sx={{ order: { xs: 2, sm: 1 } }}>
                        <Typography variant="h6" sx={{ marginBottom: '15px', fontSize: {xs: '26px', sm: '28px', md: '30px' ,lg: '36px'}, color: '#008DDA'}}>Connect With Us </Typography>
                        <Typography sx={{ whiteSpace: 'pre-line', fontSize: {xs: '13px', sm: '10px', md: '13px' ,lg: '14px'},  }}>
                            6849 Fairview Road Suite 702 Charlotte, NC 28210<br />
                            <br />
                            725 Jackson Rd Salisbury, NC 28146 <br />
                            <br />
                            1913 J N Pease Place Ste 101 Charlotte, NC 28262
                        </Typography>


                        <Typography variant="h6" sx={{ marginTop: '25px', marginBottom: '10px', color: '#008DDA' }}>Contact Us</Typography>
                        <Typography sx={{ whiteSpace: 'pre-line', fontSize: {xs: '13px', sm: '10px', md: '13px' ,lg: '14px'} }}>
                            info@jenkinscreativecounselingcenter.com<br />
                            <br />
                            Call Us: 980-308-4500 <br />
                            <br />
                            Fax: 9 80-458-6037
                        </Typography>
    
                    </Grid>

                    <Grid item xs={12} sm={8} md={8} sx={{ order: { xs: 1, sm: 2 } }}>
                        <Grid container sx={{ "& .MuiGrid-item": { flex: "none" }, marginLeft: { xs: '0px', md: '50px', lg: '85px' }, justifyContent: 'center'}}>
                            {footerCardProps.map((footerCardProp, index) => (
                                <Grid item key={footerCardProp.id} xs={6} sm={4} sx={{ display: { xs: index < 4 ? 'block' : 'none', sm: 'block' } }}> {/* display only 4 image cards on xs */}
                                    <FooterCard
                                        footerImg={footerCardProp.footerImg}
                                        footerAlt={footerCardProp.footerAlt}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>

                    <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
                        <FooterQuotes/>
                        <Typography variant="caption">© 2024 Jenkins Creative Counseling Center. All rights reserved.</Typography>
                    </Box>
            </Container>
        </Box>
    );
}

export default Footer;
