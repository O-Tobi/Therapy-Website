import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from "@mui/material";
import FooterCard from './FooterCard';
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

    const [quote, setQuote] = useState('');

    // Sample array of quotes related to mental health therapy
    const quotes = [
        "You are not alone in this journey.",
        "It's okay to ask for help when you need it.",
        "Healing is not linear; it's okay to have setbacks.",
        "Your mental health matters just as much as your physical health.",
        "Self-care is not selfish; it's necessary for your well-being.",
        "You have the strength to overcome any challenge you face.",
        "Your feelings are valid, and it's okay to express them.",
        "Every step forward, no matter how small, is a victory."
    ];

    // Function to get a random quote
    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    useEffect(() => {
        // Fetch a random quote when the component mounts
        setQuote(getRandomQuote());
    }, []);

    return (
        <Box
            sx={{
                paddingTop: '30px',
                paddingBottom: '30px',
            }}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="h6" sx={{ marginBottom: '15px', fontSize: {xs: '26px', sm: '30px', md: '34px' ,lg: '36px'}, color: '#008DDA'}}>Connect With Us </Typography>
                        <Typography sx={{ whiteSpace: 'pre-line', fontSize: {xs: '13px', sm: '12px', md: '14px' ,lg: '14px'},  }}>
                            6849 Fairview Road Suite 702 Charlotte, NC 28210<br />
                            <br />
                            725 Jackson Rd Salisbury, NC 28146 <br />
                            <br />
                            1913 J N Pease Place Ste 101 Charlotte, NC 28262
                        </Typography>


                        <Typography variant="h6" sx={{ marginY: '10px', color: '#008DDA' }}>Contact Us</Typography>
                        <Typography sx={{ whiteSpace: 'pre-line', fontSize: {xs: '13px', sm: '12px', md: '14px' ,lg: '14px'} }}>
                            info@jenkinscreativecounselingcenter.com<br />
                            <br />
                            Call Us: 980-308-4500 <br />
                            <br />
                            Fax: 9 80-458-6037
                        </Typography>
    
                    </Grid>

                    <Grid item xs={12} sm={8} md={8}>
                        <Grid container sx={{ "& .MuiGrid-item": { flex: "none" }, marginLeft: { xs: '5px', md: '50px', lg: '85px' } }}>
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



                    <Grid item xs={12}>
                        <Typography variant="body1" sx={{ marginTop: '15px', textAlign: 'center' }}>"{quote}"</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="caption" sx={{ textAlign: 'center' }}>© 2024 Jenkins Creative Counseling Center. All rights reserved.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
