import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
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
                { children }
            </Fragment>
        </ThemeProvider>
    );
};

export default Layout;