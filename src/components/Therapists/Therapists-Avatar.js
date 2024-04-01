import { Avatar, Box } from "@mui/material";

function TherapistAvatar(props) {
    return (
        <Box>
            <Avatar
                alt={props.avatarAlt}
                src={props.avatarImg}
                sx={{
                    marginX: { sm: '15px', md: '30px', lg: '40px' },
                    width: { sm: '90px', md: '100px', lg: '150px' },
                    height: { sm: '90px', md: '100px', lg: '150px' },
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)',
                    transition: 'transform 0.3s ease', // Add transition for smooth animation
                    '&:hover': {
                    transform: 'scale(1.05)', // Increase scale on hover
                    }
                    }}
            />

        </Box>
    )
};

export default TherapistAvatar;