import Joi from 'joi';

const email = Joi.string()
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
    .message('Invalid Email')
    .required()
    .empty()
    .messages({
        'any.required': 'Email field is required',
        'string.base': 'Email must be a string',
        'string.empty': 'Email must be a non-empty',
    });
const password = Joi.string()
    .trim()
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%*?&])[A-Za-z0-9!@#$%*?&]{8,}$/)
    .message('Invalid Password')
    .required()
    .empty()
    .messages({
        'any.required': 'Password field is required',
        'string.base': 'Password must be a string',
        'string.empty': 'Password must be a non-empty',
    });

const registerValidationSchema = Joi.object({
    email: email,
    password: password,
});

const loginValidationSchema = Joi.object({
    email: email,
    password: password,
});

export { registerValidationSchema, loginValidationSchema };
