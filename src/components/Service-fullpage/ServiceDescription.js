import { Box, Typography, Grid } from "@mui/material";
import ButtonComponent from "../Reusable Components/Button-component";
import FlareRoundedIcon from '@mui/icons-material/FlareRounded';

function ServiceDescription(props) {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                height: { xs: '1500px', sm: '70vh', md: '80vh', lg: '90vh' },
                marginTop: { xs: '10px', sm: '30px', md: '40px', lg: '40px' },
                paddingY: { xs: '20px', sm: '30px', md: '40px', lg: '60px' },
                paddingX: { xs: '10px', sm: '20px', md: '30px', lg: '40px' },
                marginBottom: { xs: '-350px', sm: '250px', md: '400px', lg: '350px' },
            }}
        >
            {/* Image */}
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ order: props.order }}>
                <Box
                    sx={{
                        backgroundImage: `url(${props.img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: { xs: '100%', sm: '80%', md: '95%', lg: '95%' },
                        height: '100%',
                        borderRadius: props.imageBorderRadius
                    }}
                />
            </Grid>

            {/* Paragraph */}
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ order: props.order1 }} >
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
                        {props.title}
                    </Typography>

                    {/* Services Subtitle */}
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '18px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                            textAlign: 'left',
                            textTransform: "uppercase",
                            paddingY: {lg: '10px'},
                            letterSpacing: ".1rem"
                        }}
                    >
                        {props.subTitle}
                    </Typography>

                    {/* Services Paragraph */}
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                            textAlign: 'left'
                        }}
                    >
                        {props.paragraph1}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                            textAlign: 'left',
                            marginY: { lg: '25px' }
                        }}
                    >
                        {props.paragraph2}
                    </Typography>

                    {props.listTitle1 && (
                        <Typography
                            sx={{
                                fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                                lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                                textAlign: 'left',
                                marginY: { lg: '25px' }
                            }}
                        >
                            <Box display="flex" alignItems="center" mb={1} sx={{ letterSpacing: ".1rem" }}>
                                <FlareRoundedIcon sx={{ marginRight: 2, color: '#FFA337' }} />
                                {props.listTitle1}
                            </Box>
                            <Box>
                                {props.list1}
                            </Box>
                        </Typography>
                    )}

                    {props.listTitle2 && (
                        <Typography
                            sx={{
                                fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                                lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                                textAlign: 'left',
                                marginY: { lg: '25px' }
                            }}
                        >
                            <Box display="flex" alignItems="center" mb={1} sx={{ letterSpacing: ".1rem" }}>
                                <FlareRoundedIcon sx={{ marginRight: 2, color: '#FFA337' }} />
                                {props.listTitle2}
                            </Box>
                            <Box>
                                {props.list2}
                            </Box>
                        </Typography>
                    )}

                    {props.listTitle3 && (
                        <Typography
                            sx={{
                                fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                                lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' },
                                textAlign: 'left',
                                marginY: { lg: '25px' }
                            }}
                        >
                            <Box display="flex" alignItems="center" mb={1} sx={{ letterSpacing: ".1rem" }}>
                                <FlareRoundedIcon sx={{ marginRight: 2, color: '#FFA337' }} />
                                {props.listTitle3}
                            </Box>
                            <Box>
                                {props.list3}
                            </Box>
                        </Typography>
                    )}

                    {props.name && (
                        <ButtonComponent
                        buttonName={props.name}
                        variant="contained"
                        buttonColor="white"
                        buttonWidth= {props.width}
                    />
                    )}

                    
                </Box>
            </Grid>
        </Grid> 
    );
};

export default ServiceDescription;
