import { Avatar, Box } from "@mui/material";

function TherapistAvatar (props) {
    return (
        <Box>
            <Avatar
            alt={props.avatarAlt}
            src= {props.avatarImg}
            sx={{ width: 200, height: 200 }}
            />
        </Box>
    )
};

export default TherapistAvatar;