import { Container, Typography, List, ListItem } from "@mui/material";

function PatientRight () {
    return (
        <Container
        sx={{
            marginTop: { xs: '30px', sm: '30px', md: '0px', lg: '0px' } 
        }}>
            <Typography 
            variant="subtitle1"
            sx={{textTransform: 'uppercase', 
                marginBottom: '15px',
                letterSpacing: '.1rem',
                fontWeight: 'bold',
            }}>
                no surprise act
            </Typography>

            <Typography 
            variant='body1'
            color='text.secondary'
            sx={{
                fontSize: { xs: '.8rem', sm: '.9rem', md: '1rem', lg: '1rem' },
            }}>You have the right to receive a “Good Faith Estimate” explaining how much your medical care will cost. Under the No Surprise Act, health care providers need to give individuals who do not have insurance or who are not using insurance an estimate of the bill for medical items and services. 
                <List sx={{ listStyleType: 'none', paddingLeft: '1.3px', marginLeft: '13px' }}>
                <ListItem >
                    • You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment and hospital fees.
                </ListItem>
                <ListItem>
                    • Make sure your healthcare provider gives you a Good Faith Estimate in writing at least one business day before your medical service or item. You can also ask your healthcare provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.
                </ListItem>
                <ListItem>
                    • If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.
                </ListItem>
                <ListItem>
                    • Make sure to save a copy or picture of your Good Faith Estimate.
                </ListItem>
                </List>
                    You can request a good faith estimate at any time. If you believe you have not been provided a good faith estimate when you were supposed to receive one, please let us know immediately. View more details right here. 
            </Typography>  
        </Container>
    )
}

export default PatientRight;