import dotenv from 'dotenv';
import path from 'path';

if (process.env.NODE_ENV !== 'prod') {
    const configFile = path.resolve(process.cwd(), '.env.dev');
    dotenv.config({ path: configFile });
} else {
    dotenv.config({ debug: true });
}

const {
    APP_PORT,
    MONGODB_URL,
    BCRYPT_SALT_ROUNDS,
    JWT_SIGNIN_PRIVATE_KEY,
    JWT_ENCRYPTION_PRIVATE_KEY,
} = process.env;

export {
    APP_PORT,
    MONGODB_URL,
    BCRYPT_SALT_ROUNDS,
    JWT_SIGNIN_PRIVATE_KEY,
    JWT_ENCRYPTION_PRIVATE_KEY,
};
