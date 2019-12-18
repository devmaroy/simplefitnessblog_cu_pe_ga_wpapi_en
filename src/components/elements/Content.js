import styled from 'styled-components';
import { lighten } from 'polished';

export const ContentWrapper = styled.div`
    margin: 6rem 0;
`;


export const Content = styled.div`
    color: ${ props => props.theme.colors.gray };

    h1, h2, h3, h4, h5, h6 {
        font-family: ${ props => props.theme.fonts.secondary };
        font-weight: ${ props => props.theme.fonts.weights.bold };
        color: ${ props => props.theme.colors.dark };
        margin: 6rem 0 2rem 0;
    }

    h1 {
        font-size: 4rem;
        line-height: 4.8rem;

        @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
            font-size: 4.5rem;
            line-height: 5.4rem;
        }
    }

    h2 {
        font-size: 3.3rem;
        line-height: 4rem;

        @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
            font-size: 3.7rem;
            line-height: 4.4rem;
        }
    }

    h3 {
        font-size: 2.8rem;
        line-height: 3.4rem;

        @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
            font-size: 3.1rem;
            line-height: 3.7rem;
        }
    }

    h4 {
        font-size: 2.3rem;
        line-height: 2.8rem; 

        @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
            font-size: 2.6rem;
            line-height: 3.1rem;
        }
    }

    h5 {
        font-size: 1.9rem;
        line-height: 2.3rem;

        @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
            font-size: 2.2rem;
            line-height: 2.6rem; 
        }
    }

    h6 {
        font-size: 1.6rem;
        line-height: 1.9rem; 

        @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
            font-size: 1.8rem;
            line-height: 2.2rem; 
        }
    }

    a {
        color: ${ props => props.theme.colors.primary };
        font-weight: 700;
        text-decoration: none;

        position: relative;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0px;
            right: 0;
            background-color: ${ props => props.color ? props.color : props.theme.colors.primary };
            visibility: hidden;
            transform: scaleX(0);
            transition: all ${ props => props.theme.transitions.general };
        }

        &:hover::after,
        &:focus::after {
            visibility: visible;
            transform: scaleX(1);
        }
    }

    p, ul, ol {
        font-size: 1.6rem;
        line-height: 2.9rem;   
        margin: 0 0 3rem 0;       

        @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
            font-size: 1.8rem;
            line-height: 3.2rem;
        }
    }

    ul li, ol li {
        padding-left: 1.2rem;

        &:not( :last-child ) {
            margin-bottom: 1rem;
        }
    }

    figure {
        margin: 6rem 0;
    }

    figcaption {
        margin-top: 2rem;
        text-align: center;
        color: ${ props => props.theme.colors.lightGray };
    }

    blockquote {
        border-left: 1rem solid ${ props => props.theme.colors.primary };
        margin: 6rem 0;
        padding: 1rem 3rem;

        p {
            font-size: 2.5rem;
            line-height: 3.8rem;
            margin-bottom: 2rem;

            @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
                font-size: 2.4rem;
                line-height: 4rem;
            }
        }

        cite {
            color: ${ props => props.theme.colors.lightGray };
            font-size: 1.6rem;

            @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
                font-size: 1.8rem;
            }
        
            &::before {
                content: "\u2014 ";
                color: ${ props => lighten( 0.2, props.theme.colors.primary ) };
            }
        }
    }
`;