import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const BarChartIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
            <path
                d='M12 20V10'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M18 20V4'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M6 20V16'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
        </svg>
    );
};

export default BarChartIcon;
