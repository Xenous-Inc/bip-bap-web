import React from 'react';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';
import { Provider } from 'react-redux';
import store from '@store/index';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ChakraProvider>
    );
}
export default MyApp;
