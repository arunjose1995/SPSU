import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

interface DynamicFormProps {
  schema: any;
  formData: any;
  onSubmit: (data: any) => void;
  uiSchema: any;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema, formData, onSubmit, uiSchema }) => {
  return (
    <Form
      schema={schema}
      formData={formData}
      validator={validator}
      uiSchema={uiSchema}
     
      onSubmit={(data) => onSubmit(data.formData)}
    />
  );
};

export default DynamicForm;

