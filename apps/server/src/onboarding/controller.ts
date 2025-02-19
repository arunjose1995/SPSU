import { Request, Response } from 'express';
import { schoolValidationSchema } from '../school/validation';
import { AdminModel } from '../admin/model';
import { OnboardingRequestModel } from './model';
import { SchoolDetailsModel } from '../school/model';
import { validationResponse, successResponse, errorResponse } from '../utils/handleServerResponse';
import globalErrorHandler from '../utils/globalErrorHandler';

const request = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            schoolRegistrationNumber,
            schoolName,
            address,
            establishedYear,
            schoolType,
            schoolBoardOrAffiliation,
            principalName,
            contactEmail,
            contactNumber,
            alternateContactNumber,
            website,
        } = req.body;

        const email = res.locals.decodedToken.payload.email;
        const admin = await AdminModel.findOne({
            email: email,
            isActive: true,
            isAdmin: true,
        });
        if (!admin) {
            res.status(200).json(errorResponse(401, 'Unauthorized access to the user'));
            return;
        }

        const { error } = schoolValidationSchema.validate(req.body);
        if (error) {
            res.status(200).json(validationResponse(error.message));
            return;
        }

        const fieldsToCheck = {
            schoolRegistrationNumber,
            contactEmail,
            contactNumber,
            alternateContactNumber,
            website,
        };
        for (const [key, value] of Object.entries(fieldsToCheck)) {
            if (value) {
                const isExist = await SchoolDetailsModel.findOne({ [key]: value });
                if (isExist) {
                    res.status(200).json(errorResponse(400, `${key} is already already exist`));
                    return;
                }
            }
        }

        const schoolRegisterResponse = await SchoolDetailsModel.create({
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

        const onboardingRegisterResponse = await OnboardingRequestModel.create({
            userId: admin._id,
            schoolId: schoolRegisterResponse._id,
        });

        res.status(200).json(
            successResponse('Request Submitted successfully', onboardingRegisterResponse)
        );
        return;
    } catch (error: any) {
        globalErrorHandler(res, error);
    }
};

export { request };
