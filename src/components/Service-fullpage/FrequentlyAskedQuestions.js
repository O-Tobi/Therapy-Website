import {
    Box,
    Typography,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,

} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { PropaneSharp } from "@mui/icons-material";

function FrequentlyAskedQuestions(props) {
    return (



        <Container
            sx={{
                width: { lg: "70vw" },
                marginBottom: "50px"

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
                    <Typography>
                        {props.answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Container>

    );
};

export default FrequentlyAskedQuestions;