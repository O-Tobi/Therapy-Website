import { Avatar, Box } from "@mui/material";

function TherapistAvatar (props) {
    return (
        <Box>
            <Avatar
            alt={props.avatarAlt}
            src= {props.avatarImg}
            sx={{
                marginX: '40px', 
                width: 150,
                height: 150
            }}
            />
        </Box>
    )
};

export default TherapistAvatar;