import { Container, Box } from "@mui/material";
import TherapistIntro from "./Therapist-Intro";
import TherapistAvatar from "./Therapists-Avatar";
import Happy from './../../assets/happy_family.jpg';
import ButtonComponent from "../Reusable Components/Button-component";
import { Link } from "react-router-dom";

function Therapists() {
    const avatarProps = [
        {
            id: 1,
            avatarAlt: 'Remy Sharp',
            avatarImg: `${Happy}`,
        },
        {
            id: 2,
            avatarAlt: 'Remy Sharp',
            avatarImg: `${Happy}`,
        },
        {
            id: 3,
            avatarAlt: 'Remy Sharp',
            avatarImg: `${Happy}`,
        },
        {
            id: 4,
            avatarAlt: 'Remy Sharp',
            avatarImg: `${Happy}`,
        },
        {
            id: 5,
            avatarAlt: 'Remy Sharp',
            avatarImg: `${Happy}`,
        }
    ]

    return (
        <Container>
            <TherapistIntro />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    marginY: { xs: '20px', sm: '30px', md: '50px', lg: '50px', },
                }}>
                    
                {avatarProps.map((avatarProp) => (
                    <TherapistAvatar
                        key={avatarProp.id}
                        avatarAlt={avatarProp.avatarAlt}
                        avatarImg={avatarProp.avatarImg}
                    />
                ))}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'

                }}>
              
                    <ButtonComponent
                        buttonName="Get to Know us"
                        variant="contained"
                        buttonColor="white"
                        buttonComponent={Link}
                        buttonLink="/about"
                    />
            </Box>

        </Container>
    );
}

export default Therapists;
