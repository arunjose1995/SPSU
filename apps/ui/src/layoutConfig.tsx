import { Authentication, Navigation } from '@toolpad/core';
import { COLORS } from '../theme';
import CircularBorderImage from './components/circular-border-image/CircularBorderImage';
export const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        title: 'Dashboard',
        icon: <CircularBorderImage imgSrc="/images/icons/dashboard.svg" />,
    },
    { kind: 'divider' },
    {
        kind: 'header',
        title: 'Onboarding',
    },
    {
        segment: 'schools',
        title: 'Schools',
        icon: <CircularBorderImage imgSrc="/images/icons/self-appraisal.svg" />,
    },
    {
        segment: 'teachers',
        title: 'Teachers',
        icon: <CircularBorderImage imgSrc="/images/icons/teams-appraisal.svg" />,
    },
   
];

export const BRANDING = {
    title: 'Shiksha Pradhanam Sahayya Upakaranam',
    logo: <img src="/images/spsu.jpeg" alt="Shiksha Pradhanam Sahayya Upakaranam" width={50} />,
    homeUrl: '/',
};

// export const AUTHENTICATION: Authentication = {
//     signIn: signInWithGoogle,
//     signOut: firebaseSignOut,
// };

export const LAYOUT_STYLING = {
    '.MuiAppBar-root, .MuiDrawer-paper, .MuiListSubheader-root': {
        background: COLORS.GREY_SHADE_2,
        border: 0,
    },
    background: COLORS.GREY_SHADE_2,
    p: 2,
    main: {
        border: `0.075rem solid ${COLORS.GREY_SHADE_1}`,
        borderRadius: '0.75rem',
        background: COLORS.WHITE,
    },
};
