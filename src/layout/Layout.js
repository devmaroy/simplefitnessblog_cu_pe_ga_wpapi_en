import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from '../theme/theme';

const GlobalStyles = createGlobalStyle`


    body {
        background: ${ props => props.theme.colors.bgc };
    }
`;

const Layout = ( { children }) => {
    return (
        <ThemeProvider theme={ theme }>
            <Fragment>
                <GlobalStyles />
                <Normalize />
                { children }
            </Fragment>
        </ThemeProvider>
    );
};

export default Layout;