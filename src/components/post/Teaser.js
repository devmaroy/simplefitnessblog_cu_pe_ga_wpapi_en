import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';

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
    color: ${ props => props.theme.colors.primary };
    text-transform: uppercase;

    &::after {
        content:"\u2022";
        font-size: 2rem;
        vertical-align: middle;
        color: ${ props => props.theme.colors.secondary };
        margin: 0 1.5rem; 
    }
`;

const Time = styled.time`
    color: ${ props => props.theme.colors.lightGray };
`;

const Title = styled.h2`
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: 2.8rem;
    line-height: 3.4rem;
    font-weight: ${ props => props.theme.fonts.weights.bold };
    color: ${ props => props.theme.colors.dark };
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

const ReadMore = styled( Link )`
    font-weight: ${ props => props.theme.fonts.weights.bold };
    margin-top: 4rem;

    background: ${ props => props.theme.colors.primary };
    display: inline-block;
    padding: 1.2rem 2rem;
    color: ${ props => props.theme.colors.light };
    border-radius: .6rem;
    text-decoration: none;

    &:hover,
    &:focus {
        background: ${ props => darken( 0.05, props.theme.colors.primary ) };
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
            <Link to={ `/post/${ post.slug }` } style={ { textDecoration: 'none' } }>
                <Title>{ post.title }</Title>
            </Link>
            <Content dangerouslySetInnerHTML={ { __html: post.excerpt } } />
            <ReadMore to={ `/post/${ post.slug }`}>Read more</ReadMore>
        </Article>
    );
};

export default Teaser;