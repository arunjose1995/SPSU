import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import './DynamicForm.styles.css'

interface DynamicFormProps {
  schema: any;
  formData: any;
  onSubmit: (data: any) => void;
  uiSchema: any;
}
const ObjectFieldTemplate = ({ properties }: any) => {
  return (
    <div className="grid-container">
      {properties.map((prop: any, index: number) => (
        <div key={index} className="grid-item">
          {prop.content}
        </div>
      ))}
    </div>
  );
};
  
const DynamicForm: React.FC<DynamicFormProps> = ({ schema, formData, onSubmit, uiSchema }) => {
  const customizedUiSchema = {
    ...uiSchema,
    "ui:classNames": "mui-style-form",
  };

  return (
    <Form 
      schema={schema}
      formData={formData}
      validator={validator}
      uiSchema={customizedUiSchema}
      templates={{ ObjectFieldTemplate }}
      onSubmit={(data) => onSubmit(data.formData)}
    />
  );
};

export default DynamicForm;

