// App.jsx
import React, { useState } from 'react';
import DynamicForm from '@/components/dynamic-form/DynamicForm';
import { schema, uiSchema } from './Schools.schema';
import { useOnboardingSchools } from './Schools.api';

const Schools = () => {
  const [formData, setFormData] = useState({});
  const onboardingSchools= useOnboardingSchools();

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

    onboardingSchools.mutate(requestData,{
      onSuccess: () => {
console.log('School data submitted successfully for onboarding');

      }

    });
  };

  return ( <DynamicForm
    schema={schema}
    uiSchema={uiSchema}
    formData={formData}
    onSubmit={handleSubmit}
  /> );
};

export default Schools;
