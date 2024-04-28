import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";

function FooterQuotes () {
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
        <Typography variant="body1">"{quote}"</Typography>
    )
}

export default FooterQuotes;