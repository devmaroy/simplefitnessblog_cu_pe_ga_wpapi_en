import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background: cyan;
    }
`;

const Layout = ( { children }) => {
    return (
        <Fragment>
            <GlobalStyles />
            { children }
        </Fragment>
    );
};

export default Layout;