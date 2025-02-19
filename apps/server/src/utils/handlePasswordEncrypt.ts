import { Response } from 'express';
import bcrypt from 'bcryptjs';
import { BCRYPT_SALT_ROUNDS } from '../config';

const passwordEncrypt = async (res: Response, password: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        try {
            const salt = await bcrypt.genSalt(Number(BCRYPT_SALT_ROUNDS));
            const hashedPassword = await bcrypt.hash(password, salt);

            resolve(hashedPassword);
        } catch (error) {
            reject(error);
        }
    });
};

export default passwordEncrypt;
