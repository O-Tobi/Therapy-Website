// src/components/ServiceFullPage.jsx

import { Box, Grid, Typography, Container } from "@mui/material";
import ReusableHero from "../Reusable Components/ReusableHero";
import Happy from './../../assets/happy_family.jpg';

function ServiceFullPage() {
    return (
        <Box sx={{ marginBottom: "100px" }}>
            <ReusableHero
                img={Happy}
                title="Explore Our Counseling & Therapy Services"
                mainInfo="A happy & healthy life awaits you."
            />

            <Grid
                container
                spacing={3}
                sx={{
                    paddingX: { xs: "40px", sm: "60px", md: "100px", lg: "120px" },
                    marginY: { xs: "40px", sm: "60px", md: "80px", lg: "100px" }
                }}
            >
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
                            color: '#008DDA'
                        }}
                    >
                        Therapy is beneficial for any stage in your life.
                    </Typography>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography
                        sx={{
                            fontSize: { xs: "12px", sm: "12px", md: "15px", lg: "15px" },
                            lineHeight: { xs: "25px", sm: "18px", md: "20px", lg: "40px" }
                        }}
                    >
                        Therapy is certainly the new, go-to self-care method that everyone can benefit from. Whether you require short-term, brief therapy or a longer duration of treatment, therapy can provide you a renewed sense of hope, meaning, motivation, and enthusiasm to pursue your goals and confront any obstacles in your life. The healing effects of therapy will empower you with the courage and strength you need to initiate change and enjoy your best emotional health.
                    </Typography>
                </Grid>
            </Grid>

            <Box
            sx={{
                marginX: "25px"
            }}>
                <Grid
                    container
                    spacing={2}
                    sx={{ 
                        justifyItems: "self",
                        
                    }}
                >
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box
                            sx={{
                                backgroundColor: "#0E3135",
                                paddingX: "50px",
                                paddingY: "10px",
                                borderRadius: "50px",
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                                /* justifyContent: "space-between", */
                                height: "100%"
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#5ADBF2",
                                    fontSize: "45px",
                                    marginTop: "60px",
                                    marginBottom: "25px"
                                }}
                            >
                                What We Help With
                            </Typography>

                            <Typography 
                            sx={{ 
                                fontSize: "15px", 
                                flex: 1,
                                columns: 2, 
                                columnGap: "50px", 
                                lineHeight: "35px",
                                width: "80%",
                                height: "70%",
                                }}>
                                <ul>
                                    <li>Oppositional Defiance </li>
                                    <li>Self-Esteem</li>
                                    <li>Relationship Turmoil</li>
                                    <li>Marital/Premarital Issues</li>
                                    <li>Parenting</li>
                                    <li>Separation/Divorce</li>
                                    <li>Codependency</li>
                                    <li>Anger Management</li>
                                    <li>Anxiety</li>
                                    <li>Depression</li>
                                    <li>Stress</li>
                                    <li>Inner Family Conflict</li>
                                    <li>Life Transitions</li>
                                    <li>Trauma</li>
                                    <li>ADHD</li>
                                    <li>Maternal Mental Health</li>
                                    <li>Grief and Loss</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box
                            sx={{
                                backgroundColor: "#0E3135",
                                paddingX: "50px",
                                paddingY: "10px",
                                borderRadius: "50px",
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                                /* justifyContent: "space-between", */
                                height: "100%"
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#5ADBF2",
                                    fontSize: "45px",
                                    marginTop: "60px",
                                    marginBottom: "25px"
                                }}
                            >
                                Methodology Used
                            </Typography>

                            <Typography 
                            sx={{ 
                                fontSize: "15px", 
                                flex: 1, 
                                columns: 2,
                                columnGap: "50px", 
                                lineHeight: "35px",
                                width: "80%",
                                height: "70%",
                                }}>
                                <ul>
                                    <li>Equine Facilitated Psychotherapy</li>
                                    <li>Cognitive Behavioral Therapy</li>
                                    <li>Play Therapy</li>
                                    <li>Gottman Method Couples Therapy</li>
                                    <li>Biofeedback</li>
                                    <li>Solution-Focused Therapy</li>
                                    <li>Narrative Therapy</li>
                                    <li>Trauma-Focused Cognitive Behavioral Therapy</li>
                                    <li>Bibliotherapy</li>
                                    <li>Family Systems</li>
                                    <li>Sandtray Therapy</li>
                                    <li>Mindfulness Practices</li>
                                    <li>Animal-Assisted Therapy</li>
                                    <li>Positive Psychology</li>
                                    <li>Person-Centered Therapy</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box
                sx={{
                    visibility: { xs: "hidden", sm: "visible" }
                }}
            >
                {/* <SubHero
                    img={Happy}
                    buttonName="Book a Virtual Session"
                    variant="contained"
                    mainInfo="Prefer a virtual therapy session?"
                    subInfo="If you're unable to make it to the office or not comfortable yet to speak in person, we understand."
                    subInfo1="Our telehealth services are available as a resource for you to get the therapy and counseling you deserve from the comfort of your home. With our innovative telehealth services, you’re able to get compassionate and evidence-based care in a safe therapeutic environment."
                    justifyContent="left"
                    textAlign="left"
                    paddingLeft="100px"
                /> */}
            </Box>
        </Box>
    );
}

export default ServiceFullPage;
