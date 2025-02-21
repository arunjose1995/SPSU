import { Box, styled } from '@mui/material';
import { COLORS } from '../../../theme';

const CircledBorder = styled(Box)`
    width: 2.25rem;
    height: 2.25rem;
    border: 0.025rem solid ${COLORS.GREY_SHADE_1};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: white;
    overflow: hidden;
    padding: 0.35rem;
    margin-left: -0.45rem;
`;

const CircularBorderImage = ({ imgSrc }: { imgSrc: string }) => {
    return (
        <CircledBorder>
            <Box
                component="img"
                src={imgSrc}
                alt="Circular Border"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </CircledBorder>
    );
};

export default CircularBorderImage;
