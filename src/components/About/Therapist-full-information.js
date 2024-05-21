import { Box, Typography, Grid } from "@mui/material";
import ButtonComponent from "../Reusable Components/Button-component";


/* 
props
-names
-qualifications
-specialities
-special button
*/

function TherapistFullInformation(props) {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                height: { xs: '1000px', sm: '70vh', md: '80vh', lg: '90vh' },
                marginTop: { xs: '10px', sm: '30px', md: '40px', lg: '40px' },
                paddingY: { xs: '20px', sm: '30px', md: '40px', lg: '60px' },
                paddingX: { xs: '10px', sm: '20px', md: '30px', lg: '40px' },
                marginBottom: { xs: '-450px', sm: '250px', md: '40px', lg: '90px' },

            }}>

            {/* therapist image */}
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box
                    sx={{
                        backgroundImage: `url(${props.therapistImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        /* backgroundRepeat: 'no-repeat', */
                        width: { xs: '100%', sm: '80%', md: '80%', lg: '80%' },
                        height: '100%',
                        borderRadius: '20px',
                    }} />
            </Grid>

            
            {/* therapist data */}
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontWeight: '400',
                            color: ' #FFA337',
                            fontSize: { xs: '30px', sm: '35px', md: '45px', lg: '50px' },
                            marginBottom: '10px',
                            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' }
                        }}
                    >
                        {props.names}
                    </Typography>


                    {/* therapist locations */}
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                            textAlign: 'left'
                        }}
                    >
                        LOCATIONS:
                    </Typography>

                    {/* therapist locations */}
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                            textAlign: 'left',
                            marginLeft: '30px'
                        }}
                    >
                        {props.locations}
                    </Typography>

                    {/* therapist qualifications */}
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                            textAlign: 'left'
                        }}
                    >
                        QUALIFICATIONS:
                    </Typography>

                    {/* therapist qualifications */}
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                            textAlign: 'left',
                            marginLeft: '30px'
                        }}
                    >
                        {props.qualifications}
                    </Typography>


                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                            textAlign: 'left'
                        }}
                    >
                        SPECIALITIES:
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                            textAlign: 'left',
                            marginLeft: '30px'
                        }}
                    >
                     {props.specialities}

                    </Typography>

                    <Box>
                        <ButtonComponent
                            buttonName= {`get to know ${props.name}`}
                            variant="contained"
                            buttonColor="white"
                        />
                    </Box>


                </Box>
            </Grid>
        </Grid>
    )
};

export default TherapistFullInformation;