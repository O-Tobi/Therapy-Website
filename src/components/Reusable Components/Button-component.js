import { Button } from "@mui/material";


/* 
buttonColor
buttonWidth
buttonEndicon
buttonTextspacing
buttonName
*/

function ButtonComponent(props) {
    return (
        <Button 
            variant={props.variant}
            component = {props.component}
            to = {props.link} /* I'll continue from here */
            sx={{
                fontSize: {xs: '11px', sm: '12px', md: '13px', lg: '14px'},
                color: props.buttonColor,
                fontWeight: 'bold',
                borderRadius: '25px',
                textTransform: 'uppercase',
                px: '2rem',
                py: '.8rem',
                marginTop: {xs: '11px', sm: '12px', md: '15px', lg: '20px'},
                width: props.buttonWidth,
                letterSpacing: props.buttonTextspacing
            }}
            onClick={props.buttonClick}
            endIcon={props.buttonEndicon}
        >
            {props.buttonName}
        </Button>
    );
}

export default ButtonComponent;