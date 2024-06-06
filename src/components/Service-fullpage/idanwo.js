import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ButtonComponent from "../Reusable Components/Button-component";

function Idanwo() {
    const [yipada, setYipada] = useState(false);

    const toggleIdanwo = () => {
        setYipada(prevYipada => !prevYipada);
    };

    return (
        <Box>
            <Box
                sx={{
                    display: {
                        xs: yipada ? "none" : "block",
                        sm: yipada ? "none" : "block",
                        md: "none" // Keep it always displayed for md and larger
                    },
                    backgroundColor: "pink"
                }}
            >
                <Typography variant="h3">
                    Idanwo 1
                </Typography>
            </Box>

            <Box
                sx={{
                    display: {
                        xs: yipada ? "block" : "none",
                        sm: yipada ? "block" : "none",
                        md: "none" // Keep it always hidden for md and larger
                    },
                    backgroundColor: "blue"
                }}
            >
                <Typography variant="h3">
                    Idanwo 2
                </Typography>
            </Box>

            <Box>
                <ButtonComponent 
                    buttonName="test"
                    buttonClick={toggleIdanwo}
                    variant="contained"
                />
            </Box>
        </Box>
    );
}

export default Idanwo;
