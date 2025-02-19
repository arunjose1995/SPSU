import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import './DynamicForm.styles.css'

interface DynamicFormProps {
  schema: any;
  formData: any;
  onSubmit: (data: any) => void;
  uiSchema: any;
  onCancel?:() =>void;
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
  
const CustomButtonTemplate = (props: any) => {
  return (
    <div className="button-container">
      <button
        type="submit"
        className="btn btn-info"
        onClick={props.onClick}
      >
        Submit
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.onCancel}
      >
        Cancel
      </button>
    </div>
  );
};

const DynamicForm: React.FC<DynamicFormProps> = ({ schema, formData, onSubmit, uiSchema, onCancel }) => {
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
      // templates={{ ObjectFieldTemplate }}
      templates={{ 
        ObjectFieldTemplate,
        ButtonTemplates: {
          SubmitButton: (props: any) => (
            <CustomButtonTemplate {...props} onCancel={onCancel} />
          ),
        },
      }}
      onSubmit={(data) => onSubmit(data.formData)}
    />
  );
};

export default DynamicForm;

