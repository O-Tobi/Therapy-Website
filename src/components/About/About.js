import { Box } from "@mui/material";
import ReusableHero from "../../Reusable Components/ReusableHero";
import Happy from './../../assets/happy_family.jpg'

function About () {
    return (
     <Box sx={{
        marginBottom: "100px"
     }}>

      <ReusableHero
      img= {Happy}
      title= "meet our therapists"
      mainInfo= "Guiding you towards a joyful stress-free life." />
      
     </Box>
    )
};

export default About;