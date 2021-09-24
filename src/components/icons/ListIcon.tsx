import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const ListIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
            <path
                d='M8 6H21'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M8 12H21'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M8 18H21'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M3 6H3.01'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M3 12H3.01'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M3 18H3.01'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
        </svg>
    );
};

export default ListIcon;
