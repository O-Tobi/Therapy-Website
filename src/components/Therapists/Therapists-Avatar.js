import { Avatar, Box} from "@mui/material";

function TherapistAvatar (props) {
    return (
        <Box>
            <Avatar
            alt={props.avatarAlt}
            src= {props.avatarImg}
            sx={{
                marginX: {sm: '15px', md:'30px', lg:'40px'}, 
                width: {sm:'90px',md: '100px', lg: '150px'},
                height: {sm:'90px',md: '100px', lg: '150px'}
            }}
            />

        </Box>
    )
};

export default TherapistAvatar;