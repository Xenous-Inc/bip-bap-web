import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const SkullIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='20' viewBox='0 0 18 20' fill='none' {...props}>
            <path
                d='M8.83586 0.858934C4.49381 0.951899 0.995191 4.77375 1 9.41342C1.00278 12.0946 2.16557 14.4804 3.97671 16.0444V18.5466C3.97671 18.8759 4.2266 19.1429 4.53486 19.1429H5.65112C7.88371 19.1429 10.1163 19.1429 12.3489 19.1429H13.4651C13.7734 19.1429 14.0233 18.8759 14.0233 18.5466V16.0444C15.8366 14.4785 17 12.0888 17 9.40377C16.9999 4.62532 13.3292 0.762792 8.83586 0.858934Z'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                {...props}
            />
            <ellipse
                cx='5.57136'
                cy='8.85719'
                rx='2.28571'
                ry='2.28571'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                {...props}
            />
            <circle
                cx='12.4288'
                cy='8.85719'
                r='2.28571'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                {...props}
            />
            <path
                d='M7.28564 16.8572V18.5715'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                {...props}
            />
            <path
                d='M10.7144 16.8572V18.5715'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                {...props}
            />
        </svg>
    );
};

export default SkullIcon;
