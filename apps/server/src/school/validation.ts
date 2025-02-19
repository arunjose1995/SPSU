import Joi from 'joi';

const schoolRegistrationNumber = Joi.string().trim().required().empty().messages({
    'any.required': 'Student Registration Number field is required',
    'string.base': 'Student Registration Number field must be a string',
    'string.empty': 'Student Registration Number field must be non-empty',
});
const schoolName = Joi.string().trim().required().empty().messages({
    'any.required': 'School Name field is required',
    'string.base': 'School Name field must be a string',
    'string.empty': 'School Name field must be non-empty',
});
const address = Joi.object({
    street: Joi.string().trim().required().messages({
        'any.required': 'Street is required',
        'string.base': 'Street must be a string',
        'string.empty': 'Street must not be empty',
    }),
    city: Joi.string().trim().required().messages({
        'any.required': 'City is required',
        'string.base': 'City must be a string',
        'string.empty': 'City must not be empty',
    }),
    state: Joi.string().trim().required().messages({
        'any.required': 'State is required',
        'string.base': 'State must be a string',
        'string.empty': 'State must not be empty',
    }),
    postalCode: Joi.string().trim().required().messages({
        'any.required': 'Postal Code is required',
        'string.base': 'Postal Code must be a string',
        'string.empty': 'Postal Code must not be empty',
    }),
    country: Joi.string().trim().required().messages({
        'any.required': 'Country is required',
        'string.base': 'Country must be a string',
        'string.empty': 'Country must not be empty',
    }),
})
    .required()
    .messages({
        'any.required': 'Address must be object',
    });
const establishedYear = Joi.string().trim().required().messages({
    'any.required': 'Established Year is required',
    'string.base': 'Established Year must be a string',
    'string.empty': 'Established Year must not be empty',
});
const schoolType = Joi.string().trim().valid('Public', 'Private').required().messages({
    'any.required': 'School Type is required',
    'string.base': 'School Type must be a string',
    'any.only': "School Type must be either 'Public' or 'Private'",
    'string.empty': 'School Type must not be empty',
});
const schoolBoardOrAffiliation = Joi.string()
    .trim()
    .valid('State Board', 'CBSE', 'ICSE', 'IB')
    .required()
    .messages({
        'any.required': 'School Board or Affiliation is required',
        'string.base': 'School Board or Affiliation must be a string',
        'any.only': "School Board or Affiliation must be 'State Board', 'CBSE', 'ICSE', or 'IB'",
        'string.empty': 'School Board or Affiliation must not be empty',
    });
const principalName = Joi.string().trim().required().messages({
    'any.required': 'Principal Name is required',
    'string.base': 'Principal Name must be a string',
    'string.empty': 'Principal Name must not be empty',
});
const contactEmail = Joi.string()
    .trim()
    .custom((value, helpers) => {
        if (value === 'falseEmail') {
            return value;
        }
        if (/^(?!.*\.\.)(?!^\.)[a-z0-9]+(?:\.[a-z0-9]+)*@[a-z]{5,}\.[a-z]{2,}$/.test(value)) {
            return value;
        }
        return helpers.error('any.invalid');
    })
    .message('Invalid Contact Email ')
    .required()
    .empty()
    .messages({
        'any.required': 'Contact Email field is required',
        'string.base': 'Contact Email must be a string',
        'string.empty': 'Contact Email must be a non-empty',
    });
const contactNumber = Joi.string()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .message('Invalid Contact Number')
    .required()
    .empty()
    .messages({
        'any.required': 'Contact Number field is required',
        'string.base': 'Contact Number must be a string',
        'string.empty': 'Contact Number must be a non-empty',
    });
const alternateContactNumber = Joi.string()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .message('Invalid Alternate Contact Number')
    .required()
    .empty()
    .messages({
        'any.required': 'Alternate Contact Number field is required',
        'string.base': 'Alternate Contact Number must be a string',
        'string.empty': 'Alternate Contact Number must be a non-empty',
    });
const website = Joi.string().trim().uri().allow('').optional().messages({
    'string.base': 'Website must be a string',
    'string.uri': 'Website must be a valid URL',
});

const schoolValidationSchema = Joi.object({
    schoolRegistrationNumber: schoolRegistrationNumber,
    schoolName: schoolName,
    address: address,
    establishedYear: establishedYear,
    schoolType: schoolType,
    schoolBoardOrAffiliation: schoolBoardOrAffiliation,
    principalName: principalName,
    contactEmail: contactEmail,
    contactNumber: contactNumber,
    alternateContactNumber: alternateContactNumber,
    website: website,
});

export { schoolValidationSchema };
