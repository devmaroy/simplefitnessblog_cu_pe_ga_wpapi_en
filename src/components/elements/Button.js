import styled from 'styled-components';
import { darken } from 'polished';


// Styles

const Button = styled.button`
    display: inline-block;
    outline: none;
    border: none;
    text-decoration: none;
    padding: 1.2rem 2rem;
    font-weight: ${ props => props.theme.fonts.weights.bold };
    line-height: 1.2;
    border-radius: .6rem;
    cursor: pointer;

    ${ props => props.sm &&
        'padding: 1rem 1.8rem; font-size: 1.4rem;'
    }

    //box-shadow: 0 .5rem 1rem -.4rem ${ props => props.theme.colors.primary };

    transition: ${ props => props.theme.transitions.link };
`;


export const ButtonPrimary = styled( Button )`
    color: ${ props => props.theme.colors.light };
    background: ${ props => props.theme.colors.primary };
    
    ${ props => props.shadow && `
        box-shadow: 0 .5rem 1rem -.4rem ${ props.theme.colors.primary };
    `}
    
    &:hover,
    &:focus {
        background: ${ props => darken( 0.05, props.theme.colors.primary ) };
    }
`;


export const ButtonSecondary = styled( Button )`
    color: ${ props => props.theme.colors.light };
    background: ${ props => props.theme.colors.secondary };

    ${ props => props.shadow && `
        box-shadow: 0 .5rem 1rem -.4rem ${ props.theme.colors.primary };
    `}

    &:hover,
    &:focus {
        background: ${ props => darken( 0.05, props.theme.colors.secondary ) };
    }
`;