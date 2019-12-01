import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { ButtonPrimary, ButtonSecondary } from '../elements/Button';


// Styles

export const ArticleWrapper = styled.article`
    &:not( :last-child ) {
        margin-bottom: 8rem;
    }
`;


export const Image = styled.img`
    border-radius: .6rem;

    ${ props => props.isPost && `
        margin: 6rem 0;
    `}

    transition: ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        transform: scale( 1.02 );
    }
`;


export const Meta = styled.div`
    font-family: ${ props => props.theme.fonts.primary };
    font-size: ${ props => props.theme.fonts.sizes.smaller };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    margin-top: ${ props => props.isPost ? '2.5rem' : '2rem' };

    ${ props => props.isPost && `
        text-align: center;
    `}
`;


export const Categories = styled.span`
    &::after {
        content: "\u2022";
        font-size: 2rem;
        margin: 0 1.5rem; 
        vertical-align: middle;
        color: ${ props => props.theme.colors.secondary };
    }
`;


export const Category = styled( Link )`
    text-transform: uppercase;
    text-decoration: none;
    color: ${ props => props.theme.colors.primary };
`;


export const Time = styled.time`
    color: ${ props => props.theme.colors.lightGray };
`;


export const TitleLink = styled( Link )`
    text-decoration: none;
    color: ${ props => props.theme.colors.dark };

    transition: ${ props => props.theme.transitions.link };

    &:hover,
    &:focus {
        color: ${ props => darken( 0.1, props.theme.colors.dark ) };
    }
`;


export const Title = styled.h3`
    font-family: ${ props => props.theme.fonts.secondary };
    ${ props => props.theme.elements.mobile.headings.h3 };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    margin: 3rem 0;
`;


export const TitleLarge = styled.h2`
    font-family: ${ props => props.theme.fonts.secondary };
    ${ props => props.theme.elements.mobile.headings.h2 };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    margin: 0;
    text-align: center;
`;


export const Content = styled.div`
    font-size: ${ props => props.theme.fonts.sizes.normal };
    line-height: 2.9rem;
    color: ${ props => props.theme.colors.gray };

    h1, h2, h3, h4, h5, h6 {
        font-family: ${ props => props.theme.fonts.secondary };
        font-weight: ${ props => props.theme.fonts.weights.bold };
        color: ${ props => props.theme.colors.dark };
        margin: 6rem 0 2rem 0;
    }

    h1 {
        ${ props => props.theme.elements.mobile.headings.h1 };
    }

    h2 {
        ${ props => props.theme.elements.mobile.headings.h2 };
    }

    h3 {
        ${ props => props.theme.elements.mobile.headings.h3 };
    }

    h4 {
        ${ props => props.theme.elements.mobile.headings.h4 };
    }

    h5 {
        ${ props => props.theme.elements.mobile.headings.h5 };
    }

    h6 {
        ${ props => props.theme.elements.mobile.headings.h6 };
    }


    p:first-child {
        margin: 0;
    }

    p, ul, ol {
        margin: 0 0 4rem 0;
        padding: 0;
        list-style: none;
        counter-reset: li;
    }

    ul li, ol li {
        display: flex;
        margin-bottom: 1.5rem;

        &::before {
            margin-right: 1.5rem;
            width: 1rem;
            color: ${ props => props.theme.colors.secondary };
        }
    }

    ul li::before {
        content: '\u2022';
        font-size: 2.5rem;
    }

    ol li {
        counter-increment: li;

        &::before {
            content: counter( li )'.';
            display: inline-block;
            font-weight: ${ props => props.theme.fonts.weights.bold };
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
        display: flex;
        ${ props => props.theme.elements.mobile.blockquote };
        font-weight: ${ props => props.theme.fonts.weights.bold };
        margin: 6rem 0;
        color: ${ props => lighten( 0.1, props.theme.colors.lightGray ) };

        &::before {
            ${ props => props.theme.elements.bigQuote };
    
            color: ${ props => props.theme.colors.secondary };
            margin: 2rem 2rem 3rem 0;
        }

        p {
            display: inline;
        }
    }
`;


export const ReadMore = styled( ButtonPrimary )`
    margin-top: 4rem;
`;


export const Tags = styled.div`
    margin-top: 6rem;
    background-image: linear-gradient(
        to right, ${ props => lighten( 0.45, props.theme.colors.gray ) } 61%, 
        rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 1.7rem .2rem;
    background-repeat: repeat-x;
`;


export const Tag = styled( ButtonSecondary )`
    margin-top: 4rem;

    &:not( :last-child ) {
        margin-right: 1rem;
    }
`;


export const SocialShare = styled.div`
    margin-top: 4rem;
    display: flex;
`;


export const SocialShareHeading = styled.h5`
    font-family: ${ props => props.theme.fonts.secondary };
    ${ props => props.theme.elements.mobile.headings.h5 };
    font-weight: ${ props => props.theme.fonts.weights.medium };
    color: ${ props => props.theme.colors.veryLightGray };
    margin: 0;
`;


export const SocialShareList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 0 4rem;
`;


export const SocialShareListItem = styled.li`
    display: inline-block;
    
    &:not( :last-child ){
        margin-right: 1rem;
    }
`;


export const SocialShareLink = styled( Link )`
    color: ${ props => props.theme.colors.dark };
`;