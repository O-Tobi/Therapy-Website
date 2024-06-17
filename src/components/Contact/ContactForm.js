import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, TextField, FormControlLabel, Typography, RadioGroup, Radio } from "@mui/material";
import ButtonComponent from "../Reusable Components/Button-component";

function ContactForm () {
    return (
        <Box>
            <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                location: '',
                preferredContactMethod: '',
                insuranceProvider: '',
                howDidYouHearAboutus: '',
                howCanWeHelpYou: '',
            }}
            
            validationSchema={Yup.object({
                name: Yup.string().required('Name is required'),
                email: Yup.string().email('Invalid email address').required('email is required'),
                phone: Yup.number().required('Required').positive().integer(),
                location: Yup.string().required('Location is required'),
                preferredContactMethod: Yup.string().required('Required'),
                insuranceProvider: Yup.string(),
                howDidYouHearAboutus: Yup.string().required(''),
                howCanWeHelpYou: Yup.string().required(''),

            })}

            /* i'll work on the submit handler later */
            >
            {({isSubmitting}) => (
                 <Form>
                 <Box marginBottom={2}>
                   <Typography 
                   variant="h6"
                   sx={{
                    fontSize: {xs: '14px', sm: '14px', md: '16px', lg: '16px'}
                   }}>
                    FULL NAME*
                    </Typography>
                   <Field as={TextField} name="name" fullWidth />
                   <ErrorMessage name="name" />
                 </Box>


                 <Box marginBottom={2}>
                   <Typography 
                   variant="h6"
                   sx={{
                    fontSize: {xs: '14px', sm: '14px', md: '16px', lg: '16px'}
                   }}
                   >
                    EMAIL ADDRESS*
                    </Typography>
                   <Field as={TextField} name="email" fullWidth />
                   <ErrorMessage name="email" />
                 </Box>


                 <Box marginBottom={2}>
                   <Typography 
                   variant="h6"
                   sx={{
                    fontSize: {xs: '14px', sm: '14px', md: '16px', lg: '16px'}
                   }}
                   >
                    PHONE NUMBER*
                    </Typography>
                   <Field as={TextField} name="number" type="number" fullWidth />
                   <ErrorMessage name="phone number" />
                 </Box>


                 <Box marginBottom={2}>
                   <Typography 
                   variant="h6"
                   sx={{
                    fontSize: {xs: '14px', sm: '14px', md: '16px', lg: '16px'}
                   }}
                   >
                    PREFERRED METHOD OF CONTACT?*
                    </Typography>
                   <Field name="contactMethod">
                     {({ field }) => (
                       <RadioGroup {...field}>
                         <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                         <FormControlLabel value="email" control={<Radio />} label="Email" />
                       </RadioGroup>
                     )}
                   </Field>
                   <ErrorMessage name="contactMethod" />
                 </Box>

                 <Box marginBottom={2}>
                   <Typography 
                   variant="h6"
                   sx={{
                    fontSize: {xs: '14px', sm: '14px', md: '16px', lg: '16px'}
                   }}
                   >
                    DO YOU LIVE IN NORTH CAROLINA?*
                    </Typography>
                   <Field name="location">
                     {({ field }) => (
                       <RadioGroup {...field}>
                         <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                         <FormControlLabel value="no" control={<Radio />} label="No" />
                       </RadioGroup>
                     )}
                   </Field>
                   <ErrorMessage name="location" />
                 </Box>

                 <Box marginBottom={2}>
                   <Typography 
                   variant="h6"
                   sx={{
                    fontSize: {xs: '14px', sm: '14px', md: '16px', lg: '16px'}
                   }}
                   >
                    IF APPLICABLE, WHO IS YOUR INSURANCE PROVIDER?
                    </Typography>
                   <Field as={TextField} name="feedback" fullWidth />
                   <ErrorMessage name="feedback" />
                 </Box>

                 <Box marginBottom={2}>
                   <Typography 
                   variant="h6"
                   sx={{
                    fontSize: {xs: '14px', sm: '14px', md: '16px', lg: '16px'}
                   }}
                   >
                    HOW DID YOU HEAR ABOUT US?
                    </Typography>
                   <Field as={TextField} name="howDidYouHearAboutus" fullWidth />
                   <ErrorMessage name="How did you hear about us" />
                 </Box>

                 <Box marginBottom={2}>
                   <Typography 
                   variant="h6"
                   sx={{
                    fontSize: {xs: '14px', sm: '14px', md: '16px', lg: '16px'}
                   }}
                   >
                    HOW CAN WE HELP YOU?*
                    </Typography>
                   <Field as={TextField} name="howCanWeHelpYou" multiline rows={4} fullWidth />
                   <ErrorMessage name="How can we help you" />
                 </Box>
                 
                 <Box
                 sx={{
                  display: 'flex',	
                  justifyContent: 'center',
                  alignContent: 'center',
                 }}>
                 <ButtonComponent
                  buttonName = "send you enquiry"
                  variant = "contained"
                  /> 
                 </Box>
               </Form>
            )}
              
            </Formik>
        </Box>
    )
};

export default ContactForm;