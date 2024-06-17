// src/components/ServiceFullPage.jsx

import React, { useState } from "react";
import { Box, Grid, Typography, } from "@mui/material";
import ReusableHero from "../Reusable Components/ReusableHero";
import Happy from './../../assets/happy_family.jpg';
import ButtonComponent from "../Reusable Components/Button-component";
import SubHero from "./../Reusable Components/SubHero";
import ServiceDescription from "./ServiceDescription";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Guide from "../Guide/Guide";
import WestIcon from '@mui/icons-material/West';
import { Link } from "react-router-dom";


function ServiceFullPage() {
    const serviceDescription = [
        {
            id: 1,
            img: Happy,
            title: "Counseling Services",
            paragraph1: "The comfort of a caring Outpatient service with the same in-depth and caring attention as a highly acclaimed treatment facility. This is why we’ve designed our services to provide individualized treatments you need to overcome the stress in your life at any stage. Our counseling services are available to children, adolescents, adults, couples, and families. And built to give every patient a truly unique experience where they’re encouraged to rediscover themselves, heal, and grow. ",
            listTitle1: "FOR INDIVIDUALS",
            list1: "We employ various modalities to meet the needs of every client.",
            listTitle2: "FOR COUPLES",
            list2: "We utilize the Gottman Method to encourage intimacy and learn to manage conflict in a healthy and effective way.",
            listTitle3: "FOR CHILDREN & FAMILIES",
            list3: "Play Therapy can be the key to unlock your child’s emotions and improve their communication skills.",
            imageBorderRadius: {
                xs: "70px 70px 0 0",
                sm: "60px 0 0 60px",
            },

        },

        {
            id: 2,
            img: Happy,
            title: "Equine Faciliated Therapy Services",
            paragraph1: "Here at JCCC, we partner with Saving Grace Farm located in Salisbury, NC to give all patients access to a unique and timeless therapy that has been around for generations. Our specialized treatment and Equine Facilitated Psychotherapy in North Carolina has incredible benefits. This experiential approach has been known to help with emotional regulation, confidence, problem-solving skills, impulse control, and building trust. ",
            listTitle1: "WHY DO HORSES & THERAPY WORK?",
            list1: "Horses are highly sensitive to movement and emotion. They act as mirrors between the leader’s behaviors and inner emotions. This deeper understanding and developed sense of connection can allow clients to release any emotional barriers that could be hindering their progress in traditional therapy.",
            paragraph2: "In addition, because the horses are so aware, this allows the clients to adopt the same level of self-awareness and self-reflection. It is a constant reminder to be present in the current moment which is a useful tool at the barn and in real life. ",
            order: { xs: 1, sm: 2 },
            order1: { xs: 2, sm: 1 },
            imageBorderRadius: {
                xs: "70px 70px 0 0",
                sm: "0 60px 60px 0",
            },
        },


        {
            id: 3,
            img: Happy,
            title: "Clinical Supervision",
            subTitle: "LOOKING TO BECOME A FULLY LICENSED CLINICIAN?",
            paragraph1: "The comfort of a caring Outpatient service with the same in-depth and caring attention as a highly acclaimed treatment facility. This is why we’ve designed our services to provide individualized treatments you need to overcome the stress in your life at any stage. Our counseling services are available to children, adolescents, adults, couples, and families. And built to give every patient a truly unique experience where they’re encouraged to rediscover themselves, heal, and grow. ",
            paragraph2: "We will go over how to handle your own stress, emotions, and day-to-day so you can better serve your clients. Therapy is a psychological approach so you have to make sure you are in your best psychological tip-top shape too! In addition, therapy is a classic blend of intuitive compassion and science-based methodologies. Finding a balance in these will be the most useful tool in becoming a successful and engaging therapist! ",
            buttonName: "send an enquiry",
            buttonWidth: "250px",
            imageBorderRadius: {
                xs: "70px 70px 0 0",
                sm: "60px 0 0 60px",
            },

        }
    ]

    const faqs = [
        {
            id: 1,
            question: "WHAT ARE THE BENEFITS OF TALKING TO A THERAPIST?",
            answer: "A therapist can help you process your emotions associated with many aspects and areas of your life. They are highly trained and skilled at helping you identify the feelings and emotions holding you back while providing a way through to healing."
        },

        {
            id: 2,
            question: "WHAT INSURANCE DO YOU ACCEPT?",
            answer: "At JCCC we accept BCBS, Cigna, Aetna, United Healthcare, Medcost and Medicaid (AmeriHealth, HealthyBlue, UnitedHealthcare, WellCare, Carolina Complete Health). Self-pay is an option as well."
        },

        {
            id: 3,
            question: "WHAT IS EQUINE FACILITATED THERAPY?",
            answer: "A great addition to traditional therapies. Equine Facilitated Therapy is a version of psychotherapy that involves bringing clients to a farm where they can groom, feed, and interact with the horses. This methodology has been used since Grecian times and develops a deep bond of trust and helps with emotional processing and self-esteem."
        },

        {
            id: 4,
            question: "DO I NEED TO HAVE EXPERIENCE WITH HORSES TO PARTICIPATE?",
            answer: "No. We will teach you how to interact and care for the horses properly. You'll work alongside your therapist and certified equine specialist (ESMHL) the whole time."
        },

        {
            id: 5,
            question: "WHAT IS GOTTMAN METHOD COUPLES THERAPY?",
            answer: "This method aims to increase closeness and friendship behaviors while addressing conflict productively and building a life of shared meaning together with your partner."
        },

        {
            id: 6,
            question: "PLAY THERAPY IN NORTH CAROLINA? WHAT IS IT?",
            answer: "Play therapy is a structured approach in engaging children in communication that does not feel forced. It feeds their curiosity and creates a safe space for them to explore their emotions. It is a wonderful option for those struggling with verbal skills and having difficulty regulating their emotions"
        },
        {
            id: 7,
            question: "WHAT ARE THE BENEFITS OF SELF-PAY?",
            answer: "When you pay out of pocket you have the freedom to work with anyone you like, including The Jenkins Creative Counseling Center. There are no limits to the number of sessions, you can work with us as long as you like as you make steps towards accomplishing your treatment goals."
        }
    ]


    const [showMethodology, setShowMethodology] = useState(false);

    const toggleMethodology = () => {
        setShowMethodology(prevShowMethodology => !prevShowMethodology)
    };

    return (
        <Box sx={{ marginBottom: "100px" }}>

            {/* Hero section */}
            <ReusableHero
                img={Happy}
                title="Explore Our Counseling & Therapy Services"
                mainInfo="A happy & healthy life awaits you."
            />

            {/* First section containing brief explanation of why therapy is good for you */}
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
                            fontSize: { xs: "35px", sm: "40px", md: "50px", lg: "60px" },
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

            {/* what we do and methodology used */}
            <Box
                sx={{
                    marginX: "25px",

                }}>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        justifyItems: "self",
                    }}
                >
                    {/* toggling should happen from here */}
                    <Grid item lg={6} md={6} sm={12} xs={12}
                        sx={{
                            display: { 
                                xs: showMethodology ? "none": "block", 
                                sm: showMethodology ? "none": "block",
                                md: "block",	 
                            }
                        }}>

                        <Box
                            sx={{
                                backgroundColor: "#EFFAFB",
                                paddingX: "50px",
                                paddingY: "10px",
                                borderRadius: "50px",
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#1A9CB2",
                                    fontSize: { xs: "33px", sm: "40px", md: "45px", lg: "45px" },
                                    marginTop: { xs: "30px", sm: "45px", md: "45px", lg: "60px" },
                                    marginBottom: "25px",
                                    textAlign: "center",
                                    marginLeft: { xs: "10px", sm: "0px", md: "5px", lg: "0px" }

                                }}
                            >
                                What We Help With
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    flex: 1,
                                    columns: { xs: "1", sm: "2", md: "2", lg: "2" },
                                    columnGap: { sm: "60px", md: "50px", lg: "50px" },
                                    lineHeight: { xs: "25px", sm: "30px", md: "35px", lg: "35px" },
                                    width: { xs: "100%", sm: "90%", md: "80%", lg: "80%" },
                                    marginLeft: { xs: "25px", sm: "75px", md: "20px" }
                                    /* height: "70%", */
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


                            <Box
                                sx={{
                                    display: { xs: "block", sm: "block", md: "none", lg: "none" }
                                }}
                            >
                                <ButtonComponent
                                    buttonName="Methodology Used"
                                    variant="contained"
                                    buttonClick= {toggleMethodology}
                                />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}
                       sx={{
                        display: { 
                            xs: showMethodology ? "block": "none", 
                            sm: showMethodology ? "block" : "none",
                            md: "block",	 
                        }
                    }}>
                        <Box
                            sx={{
                                backgroundColor: "#B7D2631A",
                                paddingX: "50px",
                                paddingY: "10px",
                                borderRadius: "50px",
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%"
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#B7D263",
                                    fontSize: { xs: "33px", sm: "40px", md: "45px", lg: "45px" },
                                    marginTop: { xs: "30px", sm: "45px", md: "45px", lg: "60px" },
                                    marginBottom: "25px",
                                    textAlign: "center",
                                    marginLeft: { xs: "10px", sm: "0px", md: "5px", lg: "0px" }
                                }}
                            >
                                Methodology Used
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    flex: 1,
                                    columns: { xs: "1", sm: "2", md: "2", lg: "2" },
                                    columnGap: { sm: "60px", md: "50px", lg: "50px" },
                                    lineHeight: { xs: "28px", sm: "30px", md: "35px", lg: "35px" },
                                    width: { xs: "100%", sm: "90%", md: "80%", lg: "80%" },
                                    marginLeft: { xs: "20px", sm: "75px", md: "20px" }
                                    /* height: "70%", */
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

                            <Box
                                sx={{
                                    display: { xs: "block", sm: "block", md: "none", lg: "none" }
                                }}
                            >
                                <ButtonComponent
                                    /* buttonName="What We help with" */
                                    buttonEndicon= {<WestIcon/>}
                                    buttonClick= {toggleMethodology}

                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* detailed description of services */}
            {serviceDescription.map((description) => (
                <ServiceDescription
                    key={description.id}
                    img={description.img}
                    imageBorderRadius={description.imageBorderRadius}
                    title={description.title}
                    subTitle={description.subTitle}
                    paragraph1={description.paragraph1}
                    paragraph2={description.paragraph2}
                    listTitle1={description.listTitle1}
                    list1={description.list1}
                    listTitle2={description.listTitle2}
                    list2={description.list2}
                    listTitle3={description.listTitle3}
                    list3={description.list3}
                    name={description.buttonName}
                    width={description.buttonWidth}
                    order={description.order}
                    order1={description.order1}
                />
            ))}

            {/* second hero */}
            <Box
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    marginTop: "150px"
                }}
            >
                <SubHero
                    img={Happy}
                    buttonName="Book a Virtual Session"
                    variant="contained"
                    mainInfo="Prefer a virtual therapy session?"
                    mainInfoFontSize={{ xs: '40px', sm: '40px', md: '60px', lg: '70px' }}
                    subInfo="If you're unable to make it to the office or not comfortable yet to speak in person, we understand."
                    subInfoFontSize={{ xs: '13px', sm: '12px', md: '15px', lg: '17px' }}
                    subInfo1="Our telehealth services are available as a resource for you to get the therapy and counseling you deserve from the comfort of your home. With our innovative telehealth services, you’re able to get compassionate and evidence-based care in a safe therapeutic environment."
                    subInfo1FontSize={{ xs: '13px', sm: '12px', md: '15px', lg: '17px' }}
                    justifyContent="left"
                    textAlign="left"
                    paddingLeft="50px"
                    py={{ sm: '60px', md: '80px', lg: '80px' }}
                />
            </Box>


            {/* second hero for xs screens */}
            <Box
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    marginTop: "100px",

                }}
            >
                <SubHero
                    img={Happy}
                />

                <Box
                    sx={{
                        paddingX: "30px",
                        marginTop: "40px"
                    }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: "30px",
                            marginBottom: "25px",
                            fontWeight: "400",
                            color: "#FFA337",
                        }}
                    >
                        Prefer a virtual therapy session?
                    </Typography>

                    <Typography
                        variant="subtitle1"

                        sx={{
                            fontSize: "12px",
                            textTransform: 'uppercase',
                            letterSpacing: '.1rem',
                            marginBottom: '20px',
                            fontWeight: "bold",
                        }}>
                        If you're unable to make it to the office or not comfortable yet to speak in person, we understand.
                    </Typography>

                    <Typography
                        variant="subtitle1"

                        sx={{
                            fontSize: "12px",
                            letterSpacing: '.1rem',
                            marginBottom: '20px'
                        }}>
                        Our telehealth services are available as a resource for you to get the therapy and counseling you deserve from the comfort of your home. With our innovative telehealth services, you’re able to get compassionate and evidence-based care in a safe therapeutic environment.
                    </Typography>

                    <Box
                        sx={{
                            paddingX: '50px'
                        }}>
                        <ButtonComponent
                            buttonName="What We help with"
                            variant="contained"
                        />
                    </Box>

                </Box>
            </Box>

            {/* Frequently Asked Questions */}
            <Box
                sx={{
                    marginTop: { xs: "60px", sm: "60px", md: "80px", lg: "100px" }
                }}
            >
                <Typography variant="h2"
                    sx={{
                        fontSize: { xs: "33px", sm: "50px", md: "55px", lg: "60px" },
                        textAlign: 'center',
                        fontWeight: "400",
                        color: '#008DDA',
                        marginBottom: { xs: "20px", sm: "20px", md: "25px", lg: "30px" }
                    }}>
                    Frequently Asked Questions
                </Typography>
            </Box>

            {faqs.map((faq) => {
                return (
                    <Box>
                        <FrequentlyAskedQuestions
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    </Box>
                )
            })}

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingX: { xs: '10px', sm: '12px', md: '160px', lg: '250px' },
                }}
            >
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '30px', sm: '40px', md: '40px', lg: '45px' },
                                textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
                                color: "#008DDA",
                                fontWeight: 350,
                            }}
                        >
                            Have More Questions or Concerns?
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        display="flex"
                        justifyContent="center"
                    >
                        <ButtonComponent
                            buttonName="contact us today"
                            variant="contained"
                            component= {Link}
                            to= "/contact"
                        />
                    </Grid>
                </Grid>
            </Box>


            {/* guide here */}
            <Box
                sx={{
                    marginTop: { md: "60px", lg: "50px" },
                    marginBottom: { md: "-100px" }
                }}>
                <Guide />
            </Box>

            


        </Box>
    );
}

export default ServiceFullPage;
