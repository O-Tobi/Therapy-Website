import { Box, Typography, Grid, } from "@mui/material";
import Happy from './../../assets/wellness1.jpg';


function Contact() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                height: { xs: '1000px', sm: '600px', md: '800px', lg: '800px' },
                marginTop: '30px',


            }}>

            <Box
                sx={{
                    backgroundImage: `url(${Happy})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '50%'

                }}>


            </Box>


            {/* rendering the overlay */}
            <Box
                sx={{
                    backgroundColor: 'white',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    width: '80%',
                    /* height: '50%', */
                    margin: { xs: '-70px', sm: '-70px', md: '-80px', lg: '-80px' },
                    alignItems: 'center',
                    justifyItems: 'center',
                    flexDirection: 'column',
                    py: '1%',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)',
                    padding: {xs: "10px", sm: "50px", md: "60px", lg: "70px"}
                }}>

                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        sm={5}
                        md={5}
                        lg={5}
                    >
                        <Box
                            sx={{
                                padding: {xs: "10px", sm: "10px", md: "30px", lg: "50px"}
                            }}>
                            <Typography variant="subtile" letterSpacing={".1rem"}>
                                READY TO GET STARTED?
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    marginTop: {xs: "10px", sm: "10px", md: "15px", lg: "20px"},
                                    fontSize: { xs: "40px", sm: "40px", md: "50px", lg: "60px" },
                                    color: '#008DDA'
                                }}
                            >
                                Contact Our Team Today
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} lg={1}>
          {/* this is the divider */}
            <Box
            sx={{
                backgroundColor: '#FB6D48',
                width: {xs: '100%', sm: '.5vw', md: '.5vw', lg: '.5vw'},
                height: {xs: '5px', sm: '100%', md: '100%', lg: '100%'},
                marginBottom: {xs: '20px',},
                
            }}></Box>            
        </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: "12px", sm: "12px", md: "15px", lg: "15px" },
                                lineHeight: { xs: "25px", sm: "18px", md: "20px", lg: "40px" }
                            }}
                        >
                            Thank you for visiting the official JCCC site! Our team would be happy to communicate with you more about services. If you have any questions, please fill out the form below or give us a call. <br/>

                            <br/>Please note: If you are experiencing an emergency and/or crisis, please do not wait for our email response. Instead, immediately contact your physician, visit the nearest emergency room or call 911.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>


        </Box>
    )
};

export default Contact;