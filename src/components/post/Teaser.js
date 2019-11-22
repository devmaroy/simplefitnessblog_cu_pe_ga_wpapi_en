import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';
import { ButtonPrimary } from '../elements/Button';


// Styles

const Article = styled.article`
    &:not( :last-child ) {
        margin-bottom: 8rem;
    }
`;

const Image = styled.img`
    border-radius: .6rem;
`;

const Meta = styled.div`
    font-family: ${ props => props.theme.fonts.primary };
    font-size: ${ props => props.theme.fonts.sizes.smaller };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    margin-top: 2rem;
`;

const Categories = styled.span`
    text-transform: uppercase;
    color: ${ props => props.theme.colors.primary };

    &::after {
        content: "\u2022";
        font-size: 2rem;
        margin: 0 1.5rem; 
        vertical-align: middle;
        color: ${ props => props.theme.colors.secondary };
    }
`;

const Time = styled.time`
    color: ${ props => props.theme.colors.lightGray };
`;

const TitleLink = styled( Link )`
    color: ${ props => props.theme.colors.dark };
    transition: ${ props => props.theme.transitions.link };

    &:hover,
    &:focus {
        color: ${ props => darken( 0.1, props.theme.colors.dark ) };
    }
`;

const Title = styled.h2`
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: 2.8rem;
    font-weight: ${ props => props.theme.fonts.weights.bold };
    line-height: 3.4rem;
    margin: 3rem 0;
`;

const Content = styled.div`
    font-size: ${ props => props.theme.fonts.sizes.normal };
    line-height: 2.9rem;
    color: ${ props => props.theme.colors.gray };

    p {
        margin: 0;
    }
`;


const Teaser = ( { post } ) => {
    return (
        <Article>
            <Image src={ post.featured_media.source_url } alt="Article image" />
            <Meta>
                <Categories>
                    { post.categories.map( ( category ) => (
                        <span key={ category.id }>{ category.name }</span>
                    )) }
                </Categories>
                <Time dateTime={ post.plainDate }>
                    { post.date }
                </Time>
            </Meta>
            <TitleLink to={ `/post/${ post.slug }` } style={ { textDecoration: 'none' } }>
                <Title>{ post.title }</Title>
            </TitleLink>
            <Content dangerouslySetInnerHTML={ { __html: post.excerpt } } />
            <ButtonPrimary as={ Link } to={ `/post/${ post.slug }`}>Read more</ButtonPrimary>
        </Article>
    )
}

export default Teaser;