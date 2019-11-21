import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    &:not( :last-child ) {
        margin-bottom: 8rem;
    }
`;

const Image = styled.img`
    border-radius: .6rem;
`;

const Meta = styled.div`
    margin-top: 2rem;
    font-family: 'Karla', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
`;

const Categories = styled.span`
    text-transform: uppercase;
    color: #FF9226;

    &::after {
        content:"\u2022";
        color: #f7cca2;
        font-family: 'Lato', sans-serif;
        margin: 0 1.5rem; 
    }
`;

const Time = styled.time`
    color: #cccbcb;
`;

const Heading = styled.h2`
    margin: 3rem 0;
    font-family: 'Rubik', sans-serif;
    font-size: 2.8rem;
    line-height: 3.4rem;
    font-weight: 700;
    color: #303838;
`;

const Content = styled.div`
    font-size: 1.6rem;
    line-height: 2.9rem;
    color: #aaa9a9;
    
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
                    { post.categories.map(( category ) => ( <span key={ category.id }>{ category.name }</span>)) }
                </Categories>
                <Time dateTime={ post.plainDate }>{ post.date }</Time>
            </Meta>
            <Heading>{ post.title }</Heading>
            <Content dangerouslySetInnerHTML={ { __html: post.excerpt } } />
        </Article>
    );
};

export default Teaser;

/*   <Image src={ image } alt="Article image" />
            <Meta />
            <Heading>{ title }</Heading>
            <Content dangerouslySetInnerHTML={ { __html: content } } />*/