import express from 'express';
import cors from 'cors';
import { APP_PORT, MONGODB_URL } from './config';
import connectToDatabase from './database';
import router from './routes';
import logger from './utils/handleServerLog';

const app = express();

const startServer = async () => {
    app.use(express.json({ limit: '4mb' }));
    app.use(cors());
    app.use('/api/v1', router);

    await connectToDatabase(MONGODB_URL || '');

    app.listen(APP_PORT, () => {
        console.log(`Server is running on port ${APP_PORT}`);
        logger.log('info', `Server is running on port ${APP_PORT}`);
    });
};

startServer();

export default app;
