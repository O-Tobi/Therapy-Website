import {
    Typography,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,

} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


function FrequentlyAskedQuestions(props) {
    return (



        <Container
            sx={{
                width: {sm: "80vw", md: "80vw", lg: "70vw" },
                marginBottom: {xs: "30px", sm: "40px", md: "50px", lg: "50px"}

            }}>
            <Accordion
                sx={{
                    border: 'none',
                    boxShadow: 'none',
                }}>
                <AccordionSummary
                    expandIcon={<AddIcon sx={{ fontSize: '40px',color: '#FFA337' }} />}
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
                        sx={{
                            fontSize: {xs: "11px", sm: "15", md: "15px", lg: "15px"},
                            letterSpacing: ".1rem",
                            textTransform: "uppercase"
                        }}
                    >
                        {props.question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        marginTop: "40px",
                    }}>
                    <Typography
                    sx={{
                        fontSize: {xs: "13px", sm: "15px", md: "15px", lg: "15px"},
                    }}>
                        {props.answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Container>

    );
};

export default FrequentlyAskedQuestions;