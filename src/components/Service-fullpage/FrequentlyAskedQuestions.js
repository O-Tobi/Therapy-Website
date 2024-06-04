import {
    Box,
    Typography,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,

} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function FrequentlyAskedQuestions() {
    return (
        <Box
            sx={{
                marginTop: { lg: "100px" }
            }}>
            <Typography variant="h2"
                sx={{
                    textAlign: 'center',
                    fontWeight: "350",
                    color: '#008DDA',
                    marginBottom: { lg: "30px" }
                }}>
                Frequently Asked Questions
            </Typography>

            <Container
            sx={{
                width: {lg: "70vw"},
                
            }}>
                <Accordion
                sx={{
                    border: 'none',
                    boxShadow: 'none',
                }}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            borderRadius: "50px",
                            height: "90px",
                            borderBottom: "none",
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <Typography 
                        sx= {{
                            letterSpacing: ".1rem"
                            }}
                            >
                                WHAT ARE THE BENEFITS OF TALKING TO A THERAPIST?
                            </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                    sx={{
                        marginTop: "50px",
                    }}>
                        <Typography>
                            A therapist can help you process your emotions associated 
                            with many aspects and areas of your life. They are highly trained and skilled at 
                            helping you identify the feelings and emotions holding you back while providing a way through to healing. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
            </Container>

            {/* <Container
            sx={{
                width: {lg: "70vw"},
                
            }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            backgroundColor: "#008DDA",
                            borderRadius: "50px",
                            height: "70px",
                        }}
                    >
                        <Typography 
                        sx= {{
                            letterSpacing: ".1rem"
                            }}
                            >
                                WHAT ARE THE BENEFITS OF TALKING TO A THERAPIST?
                            </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                    sx={{
                        marginTop: "20px",
                    }}>
                        <Typography>
                            A therapist can help you process your emotions associated 
                            with many aspects and areas of your life. They are highly trained and skilled at 
                            helping you identify the feelings and emotions holding you back while providing a way through to healing. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
            </Container> */}
        </Box>
    );
};

export default FrequentlyAskedQuestions;