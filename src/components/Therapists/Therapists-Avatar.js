import { Avatar, Box } from "@mui/material";

function TherapistAvatar(props) {
    return (
        <Box> {/* Add overflow: hidden to clip avatars */}
            <Avatar
                alt={props.avatarAlt}
                src={props.avatarImg}
                sx={{
                    marginX: { sm: '15px', md: '30px', lg: '40px' },
                    width: { sm: '90px', md: '100px', lg: '150px' },
                    height: { sm: '90px', md: '100px', lg: '150px' },
                }}
            />
        </Box>
    )
};

/* **********make a button component and replace all buttons************** */

export default TherapistAvatar;
