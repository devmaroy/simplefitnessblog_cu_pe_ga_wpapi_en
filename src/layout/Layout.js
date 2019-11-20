import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from '../theme/theme';
import Header from './Header/Header';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%; 
        box-sizing: border-box;
    }

    body {
        background: ${ props => props.theme.colors.background };
    }
`;

const Layout = ( { children }) => {
    return (
        <ThemeProvider theme={ theme }>
            <Fragment>
                <GlobalStyles />
                <Normalize />
                <Header />
                { children }
            </Fragment>
        </ThemeProvider>
    );
};

export default Layout;