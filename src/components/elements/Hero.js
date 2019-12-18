import styled from 'styled-components';
import { transparentize, darken } from 'polished';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BackgroundImage from 'gatsby-background-image';


/* Thumbnail */

export const Thumbnail = styled( BackgroundImage )`
    display: flex;

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
    padding: ${ props => props.styled.padding };

    display: flex;
    flex-direction: column;
`;

ThumbnailContent.defaultProps = {
    styled: {
        padding: '2rem'
    }
}

/* END Thumbnail */



/* Title */

export const TitleLink = styled( Link )`
    text-decoration: none;
    color: ${ props => props.theme.colors.light };

    transition: color ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        color: ${ props => transparentize( 0.15, props.theme.colors.light ) };    
    }
`;


export const Title = styled.h2`
    margin: 4rem 0;
    font-family: ${ props => props.theme.fonts.secondary };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    font-size: 3.2rem;
    line-height: 3.6rem;
`;


export const TitleLarge = styled.h1`
    margin: 8rem 0;
    font-family: ${ props => props.theme.fonts.secondary };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    font-size: 4.6rem;
    line-height: 5.5rem;

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        font-size: 5.2rem;
        line-height: 6.2rem;
    }
`;

/* END Title */



/* Author */

export const Author = styled.div`
    display: flex;
    align-items: center;
    color: ${ props => props.theme.colors.light };
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
    color: ${ props => props.theme.colors.light };

    transition: color ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        color: ${ props => transparentize( 0.15, props.theme.colors.light ) };    
    }
`;

/* END Author */



/* Taxonomy */

export const Meta = styled.div`
    margin-top: auto;
    color: ${ props => props.theme.colors.light };
`;


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


export const Tags = styled.div`
    margin-top: 3rem;
    color: ${ props => props.theme.colors.light };

    span {
        margin-right: 1rem;
    }
`;


export const Tag = styled( Link )`
    text-decoration: none;
    color: ${ props => props.theme.colors.light };
    font-weight: bold;
    

    &:not( :last-child ) {
        margin-right: 1rem;
    }

    transition: color ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        color: ${ props => transparentize( 0.15, props.theme.colors.light ) };    
    }
`;

/* END Taxonomy */



/* Date */

export const Date = styled.div`
    margin-top: 1rem;
    color: ${ props => props.theme.colors.light };
`;


export const DateIcon = styled( FontAwesomeIcon )`
    font-size: 1.4rem;
`;


export const Time = styled.time`
    margin-left: .5rem;
    font-weight: ${ props => props.theme.fonts.weights.bold };
`;

/* END Date */