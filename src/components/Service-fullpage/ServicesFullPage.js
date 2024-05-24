import { Box } from "@mui/material";
import ReusableHero from "../Reusable Components/ReusableHero";
import Happy from './../../assets/happy_family.jpg'
import SubHero from "../Reusable Components/SubHero";

function ServiceFullPage() {
    return (
        <Box sx={{
            marginBottom: "100px"
        }}>

            <ReusableHero
                img={Happy}
                title="explore our counseling & therapy services"
                mainInfo="A happy & healthy life awaits you." />

            <Box
            sx={{
                visibility: {xs: "hidden", sm: "visible"}
            }}>
            <SubHero
                img={Happy}
                buttonName="book a virtual session"
                variant="contained"
                mainInfo="Prefer a virtual therapy session?"
                subInfo="IF YOU'RE UNABLE TO MAKE IT TO THE OFFICE OR NOT COMFORTABLE YET TO SPEAK IN PERSON, WE UNDERSTAND."
                subInfo1= "Our telehealth services are available as a resource for you to get the therapy and counseling you deserve from the comfort of your home. With our innovative telehealth services, you’re able to get compassionate and evidence-based care in a safe therapeutic environment."
                justifyContent="left"
                textAlign="left"
                paddingLeft="100px"
                
            />

            </Box>
        </Box>
    )
};

export default ServiceFullPage;