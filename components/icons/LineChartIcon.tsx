import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const LineChartIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
            <path
                d='M23 6L13.5 15.5L8.5 10.5L1 18'
                stroke={theme.colors.elements.icons}
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
        </svg>
    );
};

export default LineChartIcon;
