import styled from 'styled-components';
import { transparentize, darken, lighten } from 'polished';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BackgroundImage from 'gatsby-background-image';

export const Thumbnail = styled( BackgroundImage )`
    &::before,
    &::after {
        filter: brightness( 50% );
        border-radius: ${ props => props.styled.borderRadius };
    }
`;

Thumbnail.defaultProps = { 
    styled: {
        borderRadius: '.6rem'
    }
}


export const ThumbnailContent = styled.header`
    position: relative;
	display: flex;
	justify-content: space-between;
	min-height: ${ props => props.styled.minHeight };
    padding: ${ props => props.styled.padding };
    flex-direction: column;
`;

ThumbnailContent.defaultProps = {
    styled: {
        minHeight: '40rem',
        padding: '4rem'
    }
}


export const Category = styled( Link )`
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: ${ props => props.theme.fonts.sizes.smaller };
    font-weight: ${ props => props.theme.fonts.weights.medium };
    margin-right: .8rem;
    padding: 1rem;
    border-radius: ${ props => props.theme.base.borderRadius };
    background: ${ props => props.theme.colors.primary };
    color: ${ props => props.theme.colors.light };

    transition: background ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        background: ${ props => darken( 0.1, props.theme.colors.primary ) };
    }
`;


export const Tag = styled( Link )`
    text-decoration: none;
    color: ${ props => transparentize( 0.15, props.theme.colors.light ) };
    font-weight: bold;
    

    &:not( :last-child ) {
        margin-right: 1rem;
    }

    &:hover,
    &:focus {
        color: ${ props => props.theme.colors.light };
    }
`;


export const TitleLink = styled( Link )`
    margin: 2rem 0;
    text-decoration: none;
    color: ${ props => transparentize( 0.15, props.theme.colors.light ) };

    transition: color ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        color: ${ props => props.theme.colors.light };    
    }
`;


export const Title = styled.h2`
    margin: 0;
    font-family: ${ props => props.theme.fonts.secondary };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    font-size: 3.2rem;
    line-height: 3.8rem;
`;


export const TitleLarge = styled.h1`
    margin: 0;
    font-family: ${ props => props.theme.fonts.secondary };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    font-size: 5.4rem;
    line-height: 6.5rem;
`;


export const AuthorAvatar = styled.img`
    border-radius: 50%;
    width: 3rem;
    margin-right: 1rem;
`;


export const AuthorName = styled.a`
    text-decoration: none;
    font-weight: ${ props => props.theme.fonts.weights.bold };
    margin-left: .5rem;
    color: ${ props => transparentize( 0.15, props.theme.colors.light ) };

    transition: color ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        color: ${ props => props.theme.colors.light };
    }
`;

export const DateIcon = styled( FontAwesomeIcon )`
    font-size: 1.4rem;
`;

export const Time = styled.time`
    margin-left: .5rem;
    font-weight: ${ props => props.theme.fonts.weights.bold };
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
        font-size: 45px;
        line-height: 54px;
    }

    h2 {
        font-size: 37px;
        line-height: 44px;
    }

    h3 {
        font-size: 31px;
        line-height: 37px;
    }

    h4 {
        font-size: 26px;
        line-height: 31px; 
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
        font-size: 1.8rem;
        margin: 0 0 4rem 0;
        line-height: 3.2rem;
    }

    ul li, ol li {
        padding-left: 1.2rem;
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
        border-left: .5rem solid ${ props => props.theme.colors.primary };
        margin: 6rem 0;
        padding: 2rem 3rem;

        p {
            font-family: ${ props => props.theme.fonts.secondary };
            font-size: 2.4rem;
            line-height: 4rem;
        }

        cite {
            color: ${ props => props.theme.colors.lightGray };
            font-size: 1.8rem;
        

            &::before {
                content: "\u2014 ";
                color: ${ props => lighten( 0.2, props.theme.colors.primary ) };
            }
        }
    }
`;