import { Request, Response } from 'express';
import { registerValidationSchema, loginValidationSchema } from './validation';
import { AdminModel } from './model';
import passwordEncrypt from '../utils/handlePasswordEncrypt';
import bcrypt from 'bcryptjs';
import * as jose from 'jose';
import { JWT_SIGNIN_PRIVATE_KEY, JWT_ENCRYPTION_PRIVATE_KEY } from '../config';
import crypto from 'crypto';
import { validationResponse, successResponse, errorResponse } from '../utils/handleServerResponse';
import globalErrorHandler from '../utils/globalErrorHandler';

const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const { error } = registerValidationSchema.validate(req.body);
        if (error) {
            res.status(200).json(validationResponse(error.message));
            return;
        }

        const findUserByEmail = await AdminModel.findOne({ email: email });

        if (!findUserByEmail) {
            const hashedPassword = await passwordEncrypt(res, password);

            const response = await AdminModel.create({
                email: email,
                password: hashedPassword,
            });

            const data = {
                email: response.email,
                password: password,
            };

            res.status(200).json(successResponse('Registered successfully', data));
        } else {
            res.status(200).json(errorResponse(409, 'Account already exist'));
        }
    } catch (error: any) {
        globalErrorHandler(res, error);
    }
};

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const { error } = loginValidationSchema.validate(req.body);
        if (error) {
            res.status(200).json(validationResponse(error.message));
            return;
        }

        const user = await AdminModel.findOne({ email: email });

        if (!user) {
            res.status(200).json(errorResponse(404, 'Account not exists'));
            return;
        } else if (user.isActive === false) {
            res.status(200).json(errorResponse(403, 'Your account is awaiting admin approval'));
            return;
        } else if (user.isAdmin === false) {
            res.status(200).json(errorResponse(401, 'Your account requires admin approval'));
            return;
        } else {
            const isPasswordMatch = bcrypt.compareSync(password, user.password);

            if (!isPasswordMatch) {
                res.status(200).json(errorResponse(401, 'Incorrect email or password'));
                return;
            } else {
                const jwtSigninKey = new TextEncoder().encode(JWT_SIGNIN_PRIVATE_KEY);
                const jwtSignedToken = await new jose.SignJWT({
                    email: user.email,
                    isAdmin: user.isAdmin,
                })
                    .setProtectedHeader({ alg: 'HS256' })
                    .setExpirationTime('24h')
                    .sign(jwtSigninKey);

                const jwtEncryptionKey = jose.base64url.decode(
                    JWT_ENCRYPTION_PRIVATE_KEY as string
                );
                const jwtEncryptionKeyWith256bit = crypto
                    .createHash('sha256')
                    .update(jwtEncryptionKey)
                    .digest();
                const jwtEncryptedToken = await new jose.EncryptJWT({ jwtSignedToken })
                    .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
                    .setExpirationTime('24h')
                    .encrypt(jwtEncryptionKeyWith256bit);

                const data = {
                    email: email,
                    password: password,
                    isAdmin: user.isAdmin,
                    token: jwtEncryptedToken,
                };

                res.status(200).json(successResponse('Login successful', data));
                return;
            }
        }
    } catch (error: any) {
        globalErrorHandler(res, error);
    }
};

export { register, login };
