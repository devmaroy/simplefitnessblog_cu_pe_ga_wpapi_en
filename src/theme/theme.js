// Colors
const colors = {
    primary: '#F0386B',
    secondary: '#F8C0C8',
    light: '#FFF',
    dark: '#403c3d',
    gray: '#797475',
    lightGray: '#adadad',
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

/* Transitions */
const transitions = {
    general: '0.25s ease-in-out 0s',
    link: '0.3s ease-in-out 0s',
    navigation: '0.35s ease 0s'
};

export default {
    colors,
    fonts,
    transitions
}