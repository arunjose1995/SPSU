import { createTheme } from '@mui/material/styles';
import "@fontsource/nunito";

export const COLORS = {
    LIGHT_GREEN: '#C6D43B',
    RED: '#EF5350',
    YELLOW: '#FF9800',
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    GREY_SHADE_1: '#DBDFE9',
    GREY_SHADE_2: '#F9F9F9',
};

export const FONT = {
    WEIGHTS: {
        LIGHT: 300,
        REGULAR: 400,
        MEDIUM: 500,
        SEMIBOLD: 600,
        BOLD: 700,
    },
    SIZES: {
        36: '2.25rem',
        28: '1.75rem',
        24: '1.5rem',
        20: '1.25rem',
        16: '1rem',
        14: '0.875rem',
        12: '0.75rem',
        9: '0.56rem',
    },
    LINE_HEIGHTS: {
        36: '2.25rem',
        28: '1.75rem',
        24: '1.5rem',
        20: '1.25rem',
        16: '1rem',
        14: '0.875rem',
        12: '0.75rem',
    },
};

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    default: COLORS.YELLOW,
                    paper: COLORS.RED,
                },
            },
        },
    },
    palette: {
        primary: {
            main: COLORS.BLACK,
        },
        error: {
            main: COLORS.RED,
        },
        warning: {
            main: COLORS.YELLOW,
        },
        success: {
            main: COLORS.LIGHT_GREEN,
        },
    },
    typography: {
        fontFamily: 'Nunito',
    },
    components: {
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    display: 'none',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    variants: [
                        {
                            props: { variant: 'contained' },
                            style: {
                                borderRadius: '0.3125rem',
                                color: COLORS.WHITE,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                fontWeight: FONT.WEIGHTS.SEMIBOLD,
                            },
                        },
                    ],
                },
            },
        },
    },
});

export default theme;
