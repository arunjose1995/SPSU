import express from 'express';
import adminRoutes from './admin/routes';
import onboardingRoutes from './onboarding/routes';

const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/onboarding', onboardingRoutes);

export default router;
