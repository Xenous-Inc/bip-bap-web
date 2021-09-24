import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const LayersIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none' {...props}>
            <path
                d='M16.0001 2.97919L2.97925 9.4896L16.0001 16L29.0209 9.4896L16.0001 2.97919Z'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M2.97925 22.5104L16.0001 29.0209L29.0209 22.5104'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M2.97925 16L16.0001 22.5104L29.0209 16'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
        </svg>
    );
};

export default LayersIcon;
