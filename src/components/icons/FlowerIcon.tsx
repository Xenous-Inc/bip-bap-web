import React, { SVGAttributes } from 'react';
import theme from '@styles/theme';

const FlowerIcon: React.FC<SVGAttributes<any>> = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='20' viewBox='0 0 16 20' fill='none' {...props}>
            <path
                d='M13.4481 1.90105C13.5679 2.35884 13.6382 2.83648 13.6382 3.33169C13.6382 6.24233 11.4332 8.63768 8.59688 8.95544H7.31683C4.47915 8.63896 2.27295 6.24311 2.27295 3.33169C2.27295 2.83648 2.34323 2.35884 2.46334 1.9008C2.47765 1.9008 2.49145 1.89876 2.50576 1.89876C3.75568 1.89876 4.90848 2.30384 5.84611 2.98568C5.91 1.87865 6.82872 1 7.95571 1C9.08271 1 10.0014 1.87865 10.0656 2.98593C11.0029 2.30409 12.1558 1.89902 13.4057 1.89902C13.42 1.89902 13.4338 1.90105 13.4481 1.90105Z'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                {...props}
            />
            <path
                d='M7.95605 8.95569V18.6162'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                {...props}
            />
            <path
                d='M14.6847 12.5497L10.8637 13.5735C9.3845 13.9699 8.32216 15.1455 8.00004 16.5404C7.67793 15.1455 6.61558 13.9699 5.13634 13.5735L1.31543 12.5497L1.28915 14.1124C1.25827 15.9476 2.48038 17.5683 4.2533 18.0434L8.00004 19L11.7468 18.0434C13.5197 17.5683 14.7418 15.9476 14.7109 14.1124L14.6847 12.5497Z'
                stroke={theme.colors.elements.icons}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                {...props}
            />
        </svg>
    );
};

export default FlowerIcon;
