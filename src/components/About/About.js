import { Box, Typography, Container, Grid } from "@mui/material";
import ReusableHero from "../Reusable Components/ReusableHero";
import TherapistFullInformation from "./Therapist-full-information";
import Happy from './../../assets/happy_family.jpg'
import SubHero from "../Reusable Components/SubHero";

function About() {

    const therapistsData = [
        {
            id: 1,
            therapistImg: Happy,
            name: "Janice",
            names: "Janiece Jenkins, MSW, LCSW, LISW-CP, RPT-S",
            locations: [
                "Detroit"
            ],
            qualifications: [
                "Licensed Clinical Social Worker in North Carolina",
                "Licensed Independent Social Worker in South Carolina",
                "Registered Play Therapist - Supervisor",
                "Master of Social Work at University of North Carolina at Charlotte",
            ],
            specialities: [
                "Play Therapy",
                "Anxiety"   
            ],
        },

        {
            id: 2,
            therapistImg: Happy,
            name: "Brittany",
            names: "Brittany Allman, MSW, LCSWA",
            locations: [
                "Salisbury - Saving Grace Farm"
            ],
            qualifications: [
                "Licensed Clinical Social Worker in North Carolina",
                "Licensed Independent Social Worker in South Carolina",
                "Registered Play Therapist - Supervisor",
                "Master of Social Work at University of North Carolina at Charlotte",
            ],
            specialities: [
                "Play Therapy",
                "Anxiety"   
            ],
        },

        {
            id: 3,
            therapistImg: Happy,
            name: "Christina",
            names: "Christina “Christy” Barrett, MSW, LCSWA",
            locations: [
                "Charlotte - University",
                "Charlotte - South Park"
                
            ],
            qualifications: [
                "Licensed Clinical Social Worker in North Carolina",
                "Licensed Independent Social Worker in South Carolina",
                "Registered Play Therapist - Supervisor",
                "Master of Social Work at University of North Carolina at Charlotte",
            ],
            specialities: [
                "Play Therapy",
                "Anxiety"   
            ],
        },

        {
            id: 4,
            therapistImg: Happy,
            name: "Nashara",
            names: "Nashara Bynum, MSW, LCSWA",
            locations: [
                "Detroit",
            ],
            qualifications: [
                "Licensed Clinical Social Worker in North Carolina",
                "Licensed Independent Social Worker in South Carolina",
                "Registered Play Therapist - Supervisor",
                "Master of Social Work at University of North Carolina at Charlotte",
            ],
            specialities: [
                "Play Therapy",
                "Anxiety"   
            ],
        },

        {
            id: 5,
            therapistImg: Happy,
            name: "Kamiya",
            names: "Kamiya Jones, MSW, LCSWA",
            locations: [
                "Telehealth",
            ],
            qualifications: [
                "Licensed Clinical Social Worker in North Carolina",
                "Licensed Independent Social Worker in South Carolina",
                "Registered Play Therapist - Supervisor",
                "Master of Social Work at University of North Carolina at Charlotte",
            ],
            specialities: [
                "Play Therapy",
                "Anxiety"   
            ],
        },

        {
            id: 6,
            therapistImg: Happy,
            name: "Blake",
            names: "Blake Kellum, MA, LCMHCA",
            locations: [
                "Telehealth",
            ],
            qualifications: [
                "Licensed Clinical Social Worker in North Carolina",
                "Licensed Independent Social Worker in South Carolina",
                "Registered Play Therapist - Supervisor",
                "Master of Social Work at University of North Carolina at Charlotte",
            ],
            specialities: [
                "Grief",
                "Anxiety"   
            ],
        },

        {
            id: 7,
            therapistImg: Happy,
            name: "Erica",
            names: "Erica Kerr Sued, MA, LCMHCA",
            locations: [
                "Telehealth",
            ],
            qualifications: [
                "Licensed Clinical Social Worker in North Carolina",
                "Licensed Independent Social Worker in South Carolina",
                "Registered Play Therapist - Supervisor",
                "Master of Social Work at University of North Carolina at Charlotte",
            ],
            specialities: [
                "Grief",
                "Depression"   
            ],
        }
    ];


    return (
        <Box sx={{ marginBottom: { xs: '250px', sm: '250px', md: '350px', lg: '250px' } }}>
            <ReusableHero
                img={Happy}
                title="meet our therapists"
                mainInfo="Guiding you towards a joyful stress-free life."
            />

            <Container sx={{
                marginTop: { xs: '40px', sm: '60px', md: '80px', lg: '80px' },
                textAlign: 'center',

            }}>
                {/* words under the hero */}
                <Box sx={{ width: { xs: '100%', md: '75%', lg: '75%', xl: '50%' }, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '12px', sm: '17px' },
                            letterSpacing: { xs: '.1rem', sm: '.2rem' },
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            marginBottom: '10px',
                        }}
                    >
                        our main mission at ctc is to help you
                    </Typography>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            textAlign: 'center',
                            fontWeight: '400',
                            color: '#008DDA',
                            fontSize: { xs: '35px', sm: '60px', md: '60px', lg: '60px' },
                            marginBottom: '10px',
                        }}
                    >
                        Overcome the stress in your life at any stage.
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontSize: { xs: '15px', sm: '17px', md: '17px', lg: '17px' },
                            lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' }
                        }}
                    >
                        Be it early childhood development years or difficulty navigating intermarital issues, we have experience utilizing various modalities such as Cognitive Behavioral Therapy, Gottman Method Couples Therapy, Play Therapy and Equine Facilitated Psychotherapy to help guide you towards leading your best life
                    </Typography>
                </Box>


                {/* images and words for about page */}
                <Grid
                    container
                    spacing={4}
                    sx={{
                        height: { xs: '1000px', sm: '70vh', md: '80vh', lg: '90vh' },
                        marginTop: { xs: '10px', sm: '30px', md: '40px', lg: '40px' },
                        paddingY: { xs: '20px', sm: '30px', md: '40px', lg: '60px' },
                        paddingX: { xs: '10px', sm: '20px', md: '30px', lg: '40px' },
                        marginBottom: { xs: '-450px', sm: '250px', md: '40px', lg: '40px' },
                    }}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box
                            sx={{
                                backgroundImage: `url(${Happy})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                width: '80%',
                                height: '100%',
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                borderBottomLeftRadius: 180,
                                borderBottomRightRadius: 180,
                                marginLeft: { xs: '30px', sm: '0px' },
                            }} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: '12px', sm: '17px' },
                                    letterSpacing: { xs: '.1rem', sm: '.2rem' },
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginBottom: '10px',
                                }}
                            >
                                WE BELIEVE EVERY PATIENT DESERVES FREEDOM FROM STRESS WHILE LEARNING TO
                            </Typography>
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    textAlign: 'center',
                                    fontWeight: '400',
                                    color: ' #FFA337',
                                    fontSize: { xs: '33px', sm: '40px', md: '50px', lg: '60px' },
                                    marginBottom: '10px',
                                }}
                            >
                                Cope better and live life more fully.
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: 'center',
                                    fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                                    lineHeight: { xs: '30px', sm: '30px', md: '40px', lg: '40px' }
                                }}
                            >
                                This is why we strive to provide comprehensive treatments that meet you where you’re at while teaching you how to find a proper life balance that honors your truth. There are so many accessible ways to heal from difficult situations beyond talk therapy! At JCCC, we want you to be a part of a comfortable environment that is proud and excited for your growth!
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* meet the therapists */}
                <Grid container spacing={.5} sx={{ marginTop: { xs: '200px', lg: '30px' } }}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#008DDA',
                                paddingLeft: { md: '100px' },
                                paddingTop: { md: '30px', lg: '10px' },
                                fontSize: { xs: '30px', sm: '35px', md: '40px', lg: '50px' },
                                textAlign: { xs: 'center', lg: 'left', md: 'left' },
                                marginBottom: { xs: '20px' }
                            }}
                        >
                            Meet The Therapists
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={1} lg={1}>
                        <Box sx={{ backgroundColor: '#FB6D48', width: { xs: '90vw', sm: '90vw', md: '.5vw', lg: '.5vw' }, height: { xs: '5px', sm: '5px', md: '140px', lg: '120px' }, marginBottom: { xs: '20px' } }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <Typography
                            sx={{
                                marginLeft: { md: '-30px' },
                                paddingRight: { md: '60px', lg: '60px' },
                                paddingTop: { md: '10px', lg: '10px' },
                                px: { xs: '20px', sm: '20px' },
                                lineHeight: { xs: '25px', sm: '30px', md: '25px', lg: '30px' },
                                textAlign: 'left'
                            }}
                        >
                            Finding the right fit in a therapist is essential to the therapeutic process.
                            Our therapists are trained in: Play Therapy, Equine-Facilitated Psychotherapy,
                            Cognitive Behavioural Therapy, Ecosystemic Structural Family Therapy, Yoga,
                            Triple P Positive Parenting, Gottman Method Couples Therapy and much more!
                        </Typography>
                    </Grid>
                </Grid>


                {therapistsData.map((therapistData) =>
                    <TherapistFullInformation
                        key={therapistData.id}
                        therapistImg={therapistData.therapistImg}
                        name={therapistData.name}
                        names={therapistData.names}
                        imageWidth = {{ xs: '100%', sm: '80%', md: '80%', lg: '80%' }}
                        imageBorderRadius = "40px"
                        locations={(
                            <ul>
                                {therapistData.locations.map((location, index) => (
                                    <li key={index}>{location}</li>
                                ))}
                            </ul>
                        )}

                        qualifications={(
                            <ul>
                                {therapistData.qualifications.map((qualification, index) => (
                                    <li key={index}>{qualification}</li>
                                ))}
                            </ul>
                        )}
                        specialities={(
                            <ul>
                                {therapistData.specialities.map((speciality, index) => (
                                    <li key={index}>{speciality}</li>
                                ))}
                            </ul>
                        )}

                    />
                )}


            </Container>

            <SubHero
            img = {Happy}
            buttonName = "contact us today!"
            variant = "contained"
            mainInfo = "We Look Forward To Hearing From You!"
            mainInfoFontSize = {{xs:'40px', sm: '50px', md: '55px', lg: '65px' }}
            subInfo = "AND HOW WE CAN HELP YOU & YOUR LOVED ONES AT ctc!"
            subInfoFontSize = {{xs:'13px',sm: '15px', md: '16px', lg: '17px' }}
            justifyContent = "center"
            textAlign = "center"
            marginTop={{xs: "100px", md: "300px", lg: "250px"}}
            marginBottom={{xs: "-150px", md: "-250px", lg: "-100px"}}
            />


        </Box>
    );
};

export default About;
