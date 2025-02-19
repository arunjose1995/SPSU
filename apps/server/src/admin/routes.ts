import express, { Router, Request, Response } from 'express';
import { register, login } from './controller';

const router: Router = express.Router();

router.post('/register', (req: Request, res: Response) => {
    register(req, res);
});

router.post('/login', (req: Request, res: Response) => {
    login(req, res);
});

export default router;
