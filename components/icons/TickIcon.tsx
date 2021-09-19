import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const TickIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6' fill='none' {...props}>
            <path d='M0.5 2.75L3 5.25L7.5 0.75' stroke={theme.colors.white} strokeLinecap='round' {...props} />
        </svg>
    );
};

export default TickIcon;
