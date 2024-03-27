import { Container, Box } from "@mui/material";
import TherapistIntro from "./Therapist-Intro";
import TherapistAvatar from "./Therapists-Avatar";
import Happy from './../../assets/happy_family.jpg'

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
            <TherapistIntro/>

            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginY: '50px',
                
            }}>
                {avatarProps.map((avatarProp) =>(
                    <TherapistAvatar 
                    key ={avatarProp.id}
                    avatarAlt= {avatarProp.avatarAlt}
                    avatarImg = {avatarProp.avatarImg}
                    />
                ))}
            </Box>
            
        </Container>
    );
}

export default Therapists;
