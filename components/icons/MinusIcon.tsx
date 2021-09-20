import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const MinusIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none' {...props}>
            <path
                d='M6.8855 16H25.1147'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
        </svg>
    );
};

export default MinusIcon;
