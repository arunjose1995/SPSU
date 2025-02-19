import { Request, Response, NextFunction } from 'express';
import * as jose from 'jose';
import { JWT_SIGNIN_PRIVATE_KEY, JWT_ENCRYPTION_PRIVATE_KEY } from '../config';
import crypto from 'crypto';
import { AdminModel } from '../admin/model';
import { errorResponse } from '../utils/handleServerResponse';
import globalErrorHandler from '../utils/globalErrorHandler';

const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.header('x-auth-token');

        if (!token) {
            res.status(200).json(errorResponse(400, 'x-auth-token header is missing'));
            return;
        }

        const jwtSigninKey = new TextEncoder().encode(JWT_SIGNIN_PRIVATE_KEY);
        const jwtEncryptionKey = jose.base64url.decode(JWT_ENCRYPTION_PRIVATE_KEY as string);
        const jwtEncryptionKeyWith256bit = crypto
            .createHash('sha256')
            .update(jwtEncryptionKey)
            .digest();

        const jwtDecryptedToken = await jose.jwtDecrypt(token, jwtEncryptionKeyWith256bit);
        const jwtSignedToken = await jose.jwtVerify(
            jwtDecryptedToken.payload.jwtSignedToken as string,
            jwtSigninKey
        );

        const currentTime = Math.floor(Date.now() / 1000);
        const expirationTime = jwtSignedToken.payload.exp as number;

        if (expirationTime <= currentTime) {
            res.status(200).json(errorResponse(401, 'Invalid Token.'));
            return;
        }

        const existingUser = await AdminModel.findOne({
            email: jwtSignedToken.payload.email,
        });

        if (!existingUser) {
            res.status(200).json(errorResponse(401, 'Account not exists'));
            return;
        }

        res.locals.decodedToken = jwtSignedToken;
        next();
    } catch (error: any) {
        globalErrorHandler(res, error);
    }
};

export default verifyToken;
