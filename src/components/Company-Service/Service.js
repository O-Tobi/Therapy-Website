import { Container, Box, Typography } from "@mui/material";
import ServiceCard from "./Service-Card";
import Happy from './../../assets/happy_family.jpg'


function Service () {
    const cardProps = [
        {
            id: 1,
            cardImg: `${Happy}`,
            cardTitle: "Counseling Services",
            cardText: "A truly unique experience where you're encouraged to rediscover yourself, heal, and grow.",
            cardAlt: "Counseling services"
        },
        {
            id: 2,
            cardImg: `${Happy}`,
            cardTitle: "Equine-Facilitated Psychotherapy",
            cardText: "We partner with Saving Grace Farm to give all patients access to a unique and timeless therapy.",
            cardAlt: "elizabethyyyyyy"
        },
        {
            id: 3,
            cardImg: `${Happy}`,
            cardTitle: "Clinical Supervision",
            cardText: "This is perfect for someone who is dedicated and excited about their profession as a therapist!",
            cardAlt: "elizabeth fresh"
        }
    ];
    

    return (
        <Container
            sx={{
                marginTop: { xs: '20px', md: '40px', lg: '50px' },
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    
                    width: { xs: '100%', md: '75%', lg: '75%', xl: '50%' }, // Adjust width based on breakpoints
                    marginLeft: 'auto',
                    marginRight: 'auto', // Center the box horizontally
                   
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        textAlign: 'center',
                        fontWeight: '350',
                        color: '#008DDA',
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '5rem', lg: '5rem' },
                        marginBottom: '10px'
                    }}
                >
                    A safe therapeutic environment is important
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '1rem' },
                        letterSpacing: { xs: '.2rem', sm: '.5rem' },
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        marginBottom: '10px'
                    }}
                >
                    As you make steps towards change
                </Typography>
                <Typography>
                    We care about you and your ability to thrive! We're a proud believer in positive psychology and the ability to work past all of life's curveballs. We provide mental health services to children, adolescents, adults, couples, and families. Our mission is to help clients overcome the stress in their lives at any stage.
                </Typography>
            </Box>
            
            <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive grid with minimum item width of 200px
                gridGap: '10px',
                justifyItems: 'center',
                alignItems: 'center',
                padding: '10px',
                marginY: '10px',
                backgroundColor: 'red',
                
            }}>
                {cardProps.map((cardProp) => (
                        <ServiceCard
                            key={cardProp.id}
                            cardImg={cardProp.cardImg}
                            cardTitle={cardProp.cardTitle}
                            cardText={cardProp.cardText}
                            cardAlt={cardProp.cardAlt}
                        />
                    ))}
            </Box>


        </Container>
    )
};

export default Service;
