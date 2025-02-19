import mongoose from 'mongoose';

const schoolDetailsSchema = new mongoose.Schema(
    {
        schoolRegistrationNumber: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        schoolName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        address: {
            street: {
                type: String,
                required: true,
                trim: true,
            },
            city: {
                type: String,
                required: true,
                trim: true,
            },
            state: {
                type: String,
                required: true,
                trim: true,
            },
            postalCode: {
                type: String,
                required: true,
                trim: true,
            },
            country: {
                type: String,
                required: true,
                trim: true,
            },
        },
        establishedYear: {
            type: String,
            required: true,
            trim: true,
        },
        schoolType: {
            type: String,
            required: true,
            trim: true,
            enum: ['Public', 'Private'],
        },
        schoolBoardOrAffiliation: {
            type: String,
            required: true,
            trim: true,
            enum: ['State Board', 'CBSE', 'ICSE', 'IB'],
        },
        principalName: {
            type: String,
            required: true,
            trim: true,
        },
        contactEmail: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        contactNumber: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        alternateContactNumber: {
            type: String,
            required: false,
            trim: true,
        },
        website: {
            type: String,
            required: false,
            trim: true,
            unique: true,
        },
    },
    { timestamps: true }
);

const SchoolDetailsModel = mongoose.model('school-details', schoolDetailsSchema);

export { SchoolDetailsModel };
