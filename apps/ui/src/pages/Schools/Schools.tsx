// App.jsx
import React, { useState } from 'react';
import DynamicForm from '@/components/dynamic-form/DynamicForm';
import { schema, uiSchema } from './Schools.schema';

const Schools = () => {
  const [selectedSchema, setSelectedSchema] = useState('school');
  const [formData, setFormData] = useState({});

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  return ( <DynamicForm
    schema={schema}
    uiSchema={uiSchema}
    formData={formData}
    onSubmit={handleSubmit}
  /> );
};

export default Schools;
