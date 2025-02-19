import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/handleServerResponse';
import globalErrorHandler from '../utils/globalErrorHandler';

const authorizeUser = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const isAdmin = res.locals.decodedToken.payload.isAdmin;

        if (!isAdmin) {
            res.status(401).json(errorResponse(401, 'Unauthorized access to the user'));
            return;
        }

        next();
    } catch (error: any) {
        globalErrorHandler(res, error);
    }
};

export default authorizeUser;
