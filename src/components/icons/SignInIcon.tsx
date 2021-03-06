import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const SignInIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
            <path
                d='M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M10 17L15 12L10 7'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
            <path
                d='M15 12H3'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
        </svg>
    );
};

export default SignInIcon;
