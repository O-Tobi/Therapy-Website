import { Box, Typography } from "@mui/material";

function GuideSteps({ number, step, stepDetails }) {
    return (
        <Box
            sx={{
                backgroundColor: 'blue',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                maxWidth: 300,
                marginX: '20px',
                marginBottom: { xs: '60px', sm: '80px', md: '100px', lg: '100px' }
            }}>

            <Box
                sx={{
                    backgroundColor: 'purple',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    paddingX: '15px',
                    paddingY: '10px',
                }}>

                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3rem', lg: '3rem' },
                        marginRight: '15px'
                    }}>
                    {number}
                </Typography>

                <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '.8rem', sm: '.9rem', md: '1rem', lg: '1rem' },
                        textTransform: 'uppercase',
                        letterSpacing: '.1rem',
                        fontWeight: 'bold',
                    }}>
                    {step}
                </Typography>

            </Box>

            <Typography
                variant='body1'
                color='text.secondary'
                sx={{
                    fontSize: { xs: '.8rem', sm: '.9rem', md: '1rem', lg: '1rem' },
                    paddingX: '15px',
                    paddingBottom: '10px',
                }}>
                {stepDetails}
            </Typography>

        </Box>
    )
};

export default GuideSteps;
