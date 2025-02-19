import { RJSFSchema, UiSchema } from "@rjsf/utils";

export const schema: RJSFSchema = {
  title: "School Registration Form",
  type: "object",
  properties: {
    schoolRegistrationNumber: {
      type: "string",
      title: "School Registration Number",
    },
    schoolName: {
      type: "string",
      title: "School Name",
    },
    address: {
      type: "object",
      title: "Address",
      properties: {
        street: {
          type: "string",
          title: "Street",
        },
        city: {
          type: "string",
          title: "City",
        },
        state: {
          type: "string",
          title: "State",
        },
        postalCode: {
          type: "string",
          title: "Postal Code",
        },
        country: {
          type: "string",
          title: "Country",
        },
      },
    },
    establishedYear: {
      type: "string",
      title: "Established Year",
    },
    schoolType: {
      type: "string",
      title: "School Type",
      enum: ["Public", "Private"],
    },
    schoolBoardOrAffiliation: {
      type: "string",
      title: "School Board or Affiliation",
      enum: ["State Board", "CBSE", "ICSE", "IB"],
    },
    principalName: {
      type: "string",
      title: "Principal Name",
    },
    contactEmail: {
      type: "string",
      title: "Contact Email",
      format: "email",
    },
    contactNumber: {
      type: "string",
      title: "Contact Number",
    },
    alternateContactNumber: {
      type: "string",
      title: "Alternate Contact Number",
    },
    website: {
      type: "string",
      title: "Website",
      format: "uri",
    },
  },
  required: [
    "schoolRegistrationNumber",
    "schoolName",
    "address",
    "establishedYear",
    "schoolType",
    "schoolBoardOrAffiliation",
    "principalName",
    "contactEmail",
    "contactNumber",
  ],
};
export const uiSchema: UiSchema = {
    schoolRegistrationNumber: {
      "ui:placeholder": "Enter registration number",
    },
    schoolName: {
      "ui:placeholder": "Enter school name",
    },
    address: {
      street: {
        "ui:placeholder": "Enter street address",
      },
      city: {
        "ui:placeholder": "Enter city",
      },
      state: {
        "ui:placeholder": "Enter state",
      },
      postalCode: {
        "ui:placeholder": "Enter postal code",
      },
      country: {
        "ui:placeholder": "Enter country",
      },
    },
    establishedYear: {
      "ui:placeholder": "Enter the year of establishment",
    },
    schoolType: {
      "ui:widget": "radio",
      "ui:options": {
        inline: true, 
      },
    },
    schoolBoardOrAffiliation: {
      "ui:widget": "select",
    },
    principalName: {
      "ui:placeholder": "Enter principal's name",
    },
    contactEmail: {
      "ui:placeholder": "Enter contact email",
    },
    contactNumber: {
      "ui:placeholder": "Enter contact number",
    },
    alternateContactNumber: {
      "ui:placeholder": "Enter alternate contact number",
    },
    website: {
      "ui:placeholder": "Enter website URL",
    },
  };
  