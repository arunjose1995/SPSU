// App.jsx
import React, { useState } from 'react';
import DynamicForm from '@/components/dynamic-form/DynamicForm';
import { schema, uiSchema } from './Schools.schema';
import { useOnboardingSchools } from './Schools.api';
import { Snackbar, Alert } from '@mui/material';

const Schools = () => {
  const [formData, setFormData] = useState({});
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const onboardingSchools = useOnboardingSchools();

  const handleSubmit = (data: any) => {
    const requestData = {
      schoolRegistrationNumber: data.schoolRegistrationNumber,
      schoolName: data.schoolName,
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        country: data.country,
      },
      establishedYear: data.establishedYear,
      schoolType: data.schoolType,
      schoolBoardOrAffiliation: data.schoolBoardOrAffiliation,
      principalName: data.principalName,
      contactEmail: data.contactEmail,
      contactNumber: data.contactNumber,
      alternateContactNumber: data.alternateContactNumber,
      website: data.website,
    };

    onboardingSchools.mutate(requestData, {
      onSuccess: () => { 
        setFormData({});
        setSnackbarOpen(true);
      },

      onError: (error) => {
        console.error("Error submitting onboarding request:", error);
      }

    });
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (<> <DynamicForm
    schema={schema}
    uiSchema={uiSchema}
    formData={formData}
    onSubmit={handleSubmit}
  />
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={4000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleSnackbarClose} severity="success">
        Onboarding Request Submitted Successfully
      </Alert>
    </Snackbar>
  </>);
};

export default Schools;
