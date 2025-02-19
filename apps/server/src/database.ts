import mongoose from 'mongoose';
import logger from './utils/handleServerLog';

const connectToDatabase = async (url: string): Promise<void> => {
    try {
        if (!url) {
            throw new Error('Mongodb url not provided');
        }

        const options = {
            autoIndex: true,
            serverSelectionTimeoutMS: 5000,
        };

        await mongoose.connect(url, options);

        console.log('Database connected');
        logger.log('info', 'Database connected');
    } catch (error) {
        throw new Error(
            `Database connection error: ${error instanceof Error ? error.message : 'Unknown error'}`
        );
    }
};

export default connectToDatabase;
