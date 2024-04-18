import { Container, Typography, List } from "@mui/material";

function PatientRight () {
    return (
        <Container
        sx={{
            backgroundColor: 'red'
        }}>
            <Typography sx={{textTransform: 'uppercase'}}>no surprise act</Typography>
            <Typography>You have the right to receive a “Good Faith Estimate” explaining how much your medical care will cost. Under the No Surprise Act, health care providers need to give individuals who do not have insurance or who are not using insurance an estimate of the bill for medical items and services. 
                <List>You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment and hospital fees.</List>
                <List>Make sure your healthcare provider gives you a Good Faith Estimate in writing at least one business day before your medical service or item. You can also ask your healthcare provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.</List>
                <List>If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</List>
                <List>Make sure to save a copy or picture of your Good Faith Estimate.</List>

                You can request a good faith estimate at any time. If you believe you have not been provided a good faith estimate when you were supposed to receive one, please let us know immediately. View more details right here. 
                </Typography>  
        </Container>
    )
}

export default PatientRight;