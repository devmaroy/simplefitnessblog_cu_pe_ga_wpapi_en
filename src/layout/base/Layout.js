import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from '../../theme/theme';
import '../../WordpressCoreStyles.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGreaterThan, faLessThan  } from '@fortawesome/free-solid-svg-icons'


// Create font awesome icon library
library.add(fab, faGreaterThan, faLessThan)


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i|Rubik:400,500,700,900&display=swap&subset=latin-ext');
    @import url('https://fonts.googleapis.com/css?family=Catamaran:700&display=swap');
    
    html {
        font-size: 62.5%; 
        box-sizing: border-box;
    }

    body {
        font-family: 'Karla', sans-serif;
        font-size: 1.6rem;
        line-height: 1.6;
        background: ${ props => props.theme.colors.background };
    }

    img {
        max-width: 100%;
        height: auto;
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
                <Footer />
            </Fragment>
        </ThemeProvider>
    );
};


export default Layout;