import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, RadioGroup, FormControlLabel, Radio, Typography, Box } from '@mui/material';

const SurveyForm = () => {
  return (
    <div>
      <h1>Survey Form</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          age: '',
          feedback: '',
          contactMethod: '' // new field for preferred contact method
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          age: Yup.number().required('Required').positive().integer(),
          feedback: Yup.string().required('Required'),
          contactMethod: Yup.string().required('Required') // validating preferred contact method
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box marginBottom={2}>
              <Typography variant="h6">Name</Typography>
              <Field as={TextField} name="name" fullWidth />
              <ErrorMessage name="name" />
            </Box>
            <Box marginBottom={2}>
              <Typography variant="h6">Email</Typography>
              <Field as={TextField} name="email" fullWidth />
              <ErrorMessage name="email" />
            </Box>
            <Box marginBottom={2}>
              <Typography variant="h6">Age</Typography>
              <Field as={TextField} name="age" type="number" fullWidth />
              <ErrorMessage name="age" />
            </Box>
            <Box marginBottom={2}>
              <Typography variant="h6">Feedback</Typography>
              <Field as={TextField} name="feedback" multiline rows={4} fullWidth />
              <ErrorMessage name="feedback" />
            </Box>
            <Box marginBottom={2}>
              <Typography variant="h6">Preferred Method of Contact (Phone or Email)</Typography>
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
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SurveyForm;
