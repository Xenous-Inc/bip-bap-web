import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            'accent': '#3d5afe',
            'accent.hover': '#4764ff',
            'accent.active': '#2441ea',
        },
        elements: {
            lines: '#afb0b9',
            inputs: '#d7d7dc',
            surfaces: '#ebebed',
        },
        facebook: {
            background: '#1877F2',
            text: '#ffffff',
        },
        google: {
            border: '#cfcfcf',
        },
        white: '#ffffff',
        black: '#000000',
        darkgrey: '#37394f',
        grey: '#5f6172',
        green: '#2ecc71',
        yellow: '#fdd835',
        red: '#f44336',
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: '20px',
            },
            variants: {
                solid: {
                    bg: 'brand.accent',
                    color: 'white',
                    _hover: { bg: 'brand.accent.hover' },
                    _active: { bg: 'brand.accent.active' },
                },
                outline: {
                    bg: 'white',
                    color: 'black',
                    borderColor: 'brand.accent',
                    borderWidth: '3px',
                    boxSizing: 'border-box',
                },
                shadow: {
                    boxShadow: '0 0 14px -8px black',
                    borderRadius: '40px',
                },
                facebook: {
                    bg: 'facebook.background',
                    color: 'facebook.text',
                },
                google: {
                    bg: 'white',
                    border: '1px',
                    borderColor: 'google.border',
                    color: 'darkgrey',
                },
            },
        },
    },
});
export default theme;
