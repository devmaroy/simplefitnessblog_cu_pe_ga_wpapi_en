// Base
const base = {
    borderRadius: '.6rem' 
}


// Colors
/*const colors = {
    primary: '#F0386B',
    secondary: '#F8C0C8',
    light: '#FFF',
    dark: '#403c3d',
    gray: '#5a595c',
    lightGray: '#adadad',
    veryLightGray: '#cac9c9',
    background: '#FFF',
    transparentBlack: 'rgba( 0, 0, 0, .5 )',
    overlayLinearGradient: 'linear-gradient( rgba( 0, 0, 0, 0.5 ), rgba( 0, 0, 0, 0.5 ) )',
}*/

const colors = {
    primary: '#3772FF',
    secondary: '#000',
    light: '#FFFFFF',
    offGray: '#626b76',
    dark: '#191716',
    gray: '#363537',
    lightGray: '#7a787c',
    veryLightGray: '#000',
    pagination: '#f1eff2',
    background: '#FFF',
    transparentBlack: 'rgba( 0, 0, 0, .5 )',
    overlayLinearGradient: 'linear-gradient( rgba( 0, 0, 0, 0.5 ), rgba( 0, 0, 0, 0.5 ) )',
}


// Fonts
const fonts = {
    primary: 'Karla, sans-serif',
    secondary: 'Rubik, sans-serif',
    sizes: {
        normal: '1.6rem',
        smaller: '1.4rem',
        small: '1.2rem'
    },
    weights: {
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        elements: {
            heading: 700,
            text: 400,
            blockquote: 300,
        }
    }
}


// Transitions
const transitions = {
    general: '0.25s ease-in-out 0s',
    link: '0.15s ease-in-out 0s',
    navigation: '0.35s ease 0s'
};


// Elements
const elements = {
    bigQuote: {
        content: `"\u201C"`,
        fontWeight: 'bold',
        fontSize: '8rem',
        fontFamily: 'Georgia, serif',
    },
    mobile: {
        headings: {
            h1: {
                fontSize: '4rem',
                lineHeight: '4.8rem',
            },
            h2: {
                fontSize: '3.3rem',
                lineHeight: '4rem',
            },
            h3: {
                fontSize: '2.8rem',
                lineHeight: '3.4rem',
            },
            h4: {
                fontSize: '2.3rem',
                lineHeight: '2.8rem',
            },
            h5: {
                fontSize: '1.9rem',
                lineHeight: '2.3rem',
            },
            h6: {
                fontSize: '1.6rem',
                lineHeight: '1.9rem',
            },
        },
        blockquote: {
            fontSize: '2.2rem',
            lineHeight: '3.6rem'
        }
    }
}


// Breakpoints
const breakpoints = {
    medium: '900px',
    large: '1180px',
    xlarge: '1750px'
};


export default {
    base,
    colors,
    fonts,
    transitions,
    elements,
    breakpoints,
}