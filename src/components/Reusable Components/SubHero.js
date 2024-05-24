import { Box, Grid, Typography } from "@mui/material";
import ButtonComponent from "./Button-component";

/* img
buttonName
variant
color
mainInfo
subInfo
subInfo1
 */

function SubHero (props) {
    return (
        <Box
            sx={{
                position: 'relative',
                height: {xs: '70vh', sm: '70vh', md: '80vh', lg: '90vh'},
                backgroundImage: `url(${props.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '10px',
                marginTop: props.marginTop
            }}
        >
            {/* Dark overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Grid
                container
                justifyContent= {props.justifyContent}
                alignItems="center"
                sx={{
                    zIndex: 2,
                    py: 2,
                    textAlign: props.textAlign,
                    paddingLeft: props.paddingLeft
                }}
            >
                <Grid
                    item
                    sm={8}
                    md={8}
                    lg={7}
                    sx={{ px: {sm: '50px', md: '60px', lg: '60px'}, 
                    color: 'white',  
                    }}>
                    
                    
                    <Typography 
                    variant="h1" 
                    component="h1" 
                    gutterBottom 
                    sx={{ 
                        fontSize: {xs:'40px', sm: '50px', md: '60px', lg: '65px' },
                        marginBottom: '20px' 
                        }}>
                        {props.mainInfo}
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: {xs:'13px',sm: '15px', md: '16px', lg: '17px' }, textTransform: 'uppercase', letterSpacing: '.1rem', marginBottom: '20px' }}>
                        {props.subInfo}
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: {xs:'13px',sm: '15px', md: '16px', lg: '17px' }, letterSpacing: '.1rem', marginBottom: '20px' }}>
                        {props.subInfo1}
                    </Typography>

                    <ButtonComponent
                    buttonName= {props.buttonName}
                    variant={props.variant}
                    buttonColor={props.color}/>

                </Grid>
                    
            </Grid>
        </Box>
    )
};

export default SubHero;