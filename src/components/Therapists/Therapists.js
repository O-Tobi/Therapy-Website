import { Container, Box, Button } from "@mui/material";
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
                <Button variant="contained"
                    sx={{
                        fontSize: { xs: '.5rem', sm: '.5rem', md: '1rem', lg: '1rem' },
                        color: 'white',
                        px: '1.5rem',
                        fontWeight: 'bold',
                        borderRadius: '25px',
                        textTransform: 'uppercase',

                    }}>
                    Get to Know us
                </Button>
            </Box>

        </Container>
    );
}

export default Therapists;
