import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const MapIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
            <path
                d='M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M8 2V18'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M16 6V22'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
        </svg>
    );
};

export default MapIcon;
