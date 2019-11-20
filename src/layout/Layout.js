import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from '../theme/theme';
import Header from './Header/Header';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Karla:400,700|Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap&subset=latin-ext');

    html {
        font-size: 62.5%; 
        box-sizing: border-box;
    }

    body {
        font-family: 'Lato', sans-serif;
        font-size: 1.6rem;
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