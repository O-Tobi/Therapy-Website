import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from "@mui/material";

function Footer() {
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
                backgroundColor: '#008DDA',
                paddingTop: '30px',
                paddingBottom: '30px',
                color: '#fff'
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" sx={{ marginBottom: '15px' }}>Connect With Us</Typography>
                        <Typography sx={{ marginBottom: '10px' }}>6849 Fairview Road Suite 702 Charlotte, NC 28210</Typography>
                        <Typography sx={{ marginBottom: '10px' }}>725 Jackson Rd Salisbury, NC 28146 </Typography>
                        <Typography>1913 J N Pease Place Ste 101 Charlotte, NC 28262 </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" sx={{ marginBottom: '15px' }}>Contact Us</Typography>
                        <Typography sx={{ marginBottom: '10px' }}>info@jenkinscreativecounselingcenter.com</Typography>
                        <Typography>Call Us: 980-308-4500 Fax: 980-458-6037  </Typography>
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
