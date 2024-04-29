import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";

function FooterQuotes () {
    const [quote, setQuote] = useState('');

    // Sample array of quotes related to mental health therapy
    const quotes = [
        'You are not alone in this journey. - Melody Beattie',
        'It\'s okay to ask for help when you need it. - Lori Deschene',
        'Healing is not linear; it\'s okay to have setbacks. - Lisa Olivera',
        'There is hope, even when your brain tells you there isn\'t. - John Green',
        'Mental health is not a destination, it\'s a journey. - Margaret M. Lynch',
        'Your mental health matters. Don\'t ignore it. - J.K. Rowling',
        'Sometimes the strongest thing you can do is surrender and just let go. - Paulo Coelho',
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
        <Typography
        variant="body1" 
        sx={{ 
            fontStyle: 'italic',
            fontSize: {xs: '12px', sm: '14px'}
        }}>
            "{quote}"
        </Typography>
    )
}

export default FooterQuotes;