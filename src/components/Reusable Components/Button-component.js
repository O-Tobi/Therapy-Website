import { Button } from "@mui/material";



function ButtonComponent (props) {
    return (
        <Button 
        variant= {props.variant}
        sx={{
            fontSize: {xs:'11px',sm: '12px', md: '13px', lg: '14px' },
            color: props.buttonColor,
            fontWeight: 'bold',
            borderRadius: '25px',
            textTransform: 'uppercase',
            px: '2rem',
            py: '.8rem',
            marginTop: {xs:'11px',sm: '12px', md: '15px', lg: '20px' },
            width: props.buttonWidth,
            endIcon: props.buttonEndicon,
            letterSpacing: props.buttonTextspacing
        }}>
            {props.buttonName}
        </Button>
    )
};

export default ButtonComponent;