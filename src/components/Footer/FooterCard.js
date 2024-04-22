import {Box } from "@mui/material";

function FooterCard (props) {
    return (
       <Box
       sx= {{
        backgroundImage : `url(${props.footerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:{xs: '170px', sm: '150px', md: '190px', lg: '220px'},
        width:{xs: '170px', sm: '150px', md: '190px', lg: '220px'},
        
       }} /> 
    )
};

export default FooterCard;


/* use box with background image, it will obey you more than this troublesome car component */