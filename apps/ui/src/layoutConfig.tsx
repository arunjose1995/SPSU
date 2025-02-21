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
        icon: <CircularBorderImage imgSrc="/images/icons/school.svg" />,
    },
    {
        segment: 'staffs',
        title: 'Staffs',
        icon: <CircularBorderImage imgSrc="/images/icons/staff.svg" />,
    },
   
];

export const BRANDING = {
    title: 'Shiksha Pradhanam Sahayya Upakaranam',
    logo: <img src="/images/spsu.png" alt="Shiksha Pradhanam Sahayya Upakaranam" width={50} />,
    homeUrl: '/',
};


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
