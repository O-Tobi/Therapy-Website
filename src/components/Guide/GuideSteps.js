import { Box, Typography } from "@mui/material";


/* this is the overlay */
function GuideSteps({ number, step, stepDetails }) {
    return (
        <Box
            sx={{
                backgroundColor: 'blue',
                height: 200,
                maxWidth: 300,
                alignItems: 'left',
                marginX: '20px',
                marginBottom: {xs: '60px', sm: '80px', md:'100px', lg: '100px'}

            }}>
            
                <Box
                    sx={{
                        height: '30%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'left',
                        backgroundColor: 'purple',
                        
                    }}>

                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '3rem', lg: '3rem' },
                            marginX: "15px"
                        }}>
                        {number}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '.5rem', sm: '.5rem', md: '1rem', lg: '1rem' },
                            textTransform: 'uppercase',
                            letterSpacing: '.1rem',
                            fontWeight: 'bold',
                            paddingBottom: '10px'
                        }}>
                        {step}
                    </Typography>


                </Box>
                <Typography variant='body1' color='text.secondary'>
                    {stepDetails}
                </Typography>
            
        </Box>
    )
};

export default GuideSteps;



