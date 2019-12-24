import React, { Fragment } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from '../../theme/theme';
import  '../../wordpresscorestyles.css';
import Meta from '../../components/base/Meta';
import Header from '../header/header';
import Footer from '../footer/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faClock  } from '@fortawesome/free-regular-svg-icons';


// Create font awesome icon library
library.add( fab, faClock, faGlobe );


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i|Rubik:400,500,700,900&display=swap&subset=latin-ext');
    
    html {
        font-size: 62.5%; 
        box-sizing: border-box;
    }

    body {
        font-family: ${ props => props.theme.fonts.primary };
        font-size: ${ props => props.theme.fonts.sizes.normal };
        line-height: 1.6;
        background: ${ props => props.theme.colors.background };
        -webkit-font-smoothing: antialiased;
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
                <Meta />
                <Header />
                { children }
                <Footer />
            </Fragment>
        </ThemeProvider>
    );
};


Layout.propTypes = {
    children: PropTypes.element.isRequired,
};


export default Layout;