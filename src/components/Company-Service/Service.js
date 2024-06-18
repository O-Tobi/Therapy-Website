import { Container, Box} from "@mui/material";
import AboutService from "./About-Service";
import ServiceCard from "./Service-Card";
import Happy from './../../assets/happy_family.jpg';
import { Link } from "react-router-dom";


function Service () {
    const cardProps = [
        {
            id: 1,
            cardImg: `${Happy}`,
            cardTitle: "Counseling Services",
            cardText: "A truly unique experience where you're encouraged to rediscover yourself, heal, and grow.",
            cardAlt: "Counseling services",
            buttonColor: "#FFAF45"
        },
        {
            id: 2,
            cardImg: `${Happy}`,
            cardTitle: "Equine-Facilitated Psychotherapy",
            cardText: "We partner with Saving Grace Farm to give all patients access to a unique and timeless therapy.",
            cardAlt: "elizabethyyyyyy",
            buttonColor: "#008DDA"  
        },
        {
            id: 3,
            cardImg: `${Happy}`,
            cardTitle: "Clinical Supervision",
            cardText: "This is perfect for someone who is dedicated and excited about their profession as a therapist!",
            cardAlt: "elizabeth fresh",
            buttonColor: "#FB6D48"
        }
    ];
    

    return (
        <Box>
            <AboutService />
            <Container
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive grid with minimum item width of 200px
                            gridGap: '10px',
                            justifyItems: 'center',
                            alignItems: 'center',
                            padding: '10px',
                            marginY: '50px',
                            
                        }}>
                            {cardProps.map((cardProp) => (
                                    <ServiceCard
                                        key={cardProp.id}
                                        cardImg={cardProp.cardImg}
                                        cardTitle={cardProp.cardTitle}
                                        cardText={cardProp.cardText}
                                        cardAlt={cardProp.cardAlt}
                                        buttonColor={cardProp.buttonColor}
                                        buttonComponent = {Link}
                                        buttonLink = "/services"


                                    />
                                ))}
            </Container>
        </Box>
        
        
    )
};

export default Service;
