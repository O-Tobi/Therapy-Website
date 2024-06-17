import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, TextField, FormControlLabel, Typography, RadioGroup, Radio } from "@mui/material";
import ButtonComponent from "../Reusable Components/Button-component";

function ContactForm() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Perform your form submission logic here, such as sending data to an API
    console.log("Form values:", values);

    // Simulate an async operation (e.g., API call)
    setTimeout(() => {
      setSubmitting(false); // Set submitting to false when the operation is done
      resetForm(); // Reset the form fields
    }, 1000);
  };

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
          email: Yup.string().email('Invalid email address').required('Email is required'),
          phone: Yup.string().required('Phone number is required'),
          location: Yup.string().required('Location is required'),
          preferredContactMethod: Yup.string().required('Preferred contact method is required'),
          insuranceProvider: Yup.string(),
          howDidYouHearAboutus: Yup.string().required('This field is required'),
          howCanWeHelpYou: Yup.string().required('This field is required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box marginBottom={2}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' }
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
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' }
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
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' }
                }}
              >
                PHONE NUMBER*
              </Typography>
              <Field as={TextField} name="phone" fullWidth />
              <ErrorMessage name="phone" />
            </Box>

            <Box marginBottom={2}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' }
                }}
              >
                PREFERRED METHOD OF CONTACT?*
              </Typography>
              <Field name="preferredContactMethod">
                {({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                    <FormControlLabel value="email" control={<Radio />} label="Email" />
                  </RadioGroup>
                )}
              </Field>
              <ErrorMessage name="preferredContactMethod" />
            </Box>

            <Box marginBottom={2}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' }
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
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' }
                }}
              >
                IF APPLICABLE, WHO IS YOUR INSURANCE PROVIDER?
              </Typography>
              <Field as={TextField} name="insuranceProvider" fullWidth />
              <ErrorMessage name="insuranceProvider" />
            </Box>

            <Box marginBottom={2}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' }
                }}
              >
                HOW DID YOU HEAR ABOUT US?
              </Typography>
              <Field as={TextField} name="howDidYouHearAboutus" fullWidth />
              <ErrorMessage name="howDidYouHearAboutus" />
            </Box>

            <Box marginBottom={2}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' }
                }}
              >
                HOW CAN WE HELP YOU?*
              </Typography>
              <Field as={TextField} name="howCanWeHelpYou" multiline rows={4} fullWidth />
              <ErrorMessage name="howCanWeHelpYou" />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <ButtonComponent
                buttonName="Send Your Enquiry"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default ContactForm;
