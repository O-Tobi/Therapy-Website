import { Box } from "@mui/material";
import ReusableHero from "../Reusable Components/ReusableHero";
 import Happy from './../../assets/happy_family.jpg'

function ServiceFullPage () {
    return (
        <Box sx={{
            marginBottom: "100px"
         }}>
    
          <ReusableHero
          img= {Happy}
          title= "explore our counseling & therapy services"
          mainInfo= "A happy & healthy life awaits you." />
          
         </Box>
    )
};

export default ServiceFullPage;