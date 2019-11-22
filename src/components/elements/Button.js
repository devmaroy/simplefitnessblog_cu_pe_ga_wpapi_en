import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonPrimary = styled.button`
    display: inline-block;
    outline: none;
    border: none;
    text-decoration: none;
    margin-top: 4rem;
    padding: 1.2rem 2rem;
    font-weight: ${ props => props.theme.fonts.weights.bold };
    border-radius: .6rem;
    color: ${ props => props.theme.colors.light };
    background: ${ props => props.theme.colors.primary };
    cursor: pointer;

    transition: ${ props => props.theme.transitions.link };

    // Trying to simulate object blur trick (duplicate layer) from AdobeXD design
    box-shadow: 0 .5rem 1rem -.4rem ${ props => props.theme.colors.primary };

    &:hover,
    &:focus {
        background: ${ props => darken( 0.1, props.theme.colors.primary ) };
    }
`;