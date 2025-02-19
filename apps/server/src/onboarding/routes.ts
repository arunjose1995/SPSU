import express, { Router, Request, Response } from 'express';
import { request } from './controller';
import verifyToken from '../middlewares/token';
import authorizeUser from '../middlewares/auth';

const router: Router = express.Router();

router.post('/request', verifyToken, authorizeUser, (req: Request, res: Response) => {
    request(req, res);
});

export default router;
