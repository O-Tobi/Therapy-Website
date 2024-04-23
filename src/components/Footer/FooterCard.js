import {Box } from "@mui/material";

function FooterCard (props) {
    return (
        <Box
        sx={{
            margin: '5px',
        }}>
            <Box
            sx= {{
                backgroundImage : `url(${props.footerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                height:{xs: '140px', sm: '150px', md: '190px', lg: '220px'},
                width:{xs: '140px', sm: '150px', md: '190px', lg: '220px'},
                
            }} /> 
        </Box>
       
    )
};

export default FooterCard;