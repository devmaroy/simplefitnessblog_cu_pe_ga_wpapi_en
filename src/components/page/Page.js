import React from 'react';
import PropTypes from 'prop-types';
import { pagePropTypes } from '../../propTypeValues';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { transparentize } from 'polished';
import {
    ContentWrapper,
    Content,
} from '../elements/Content';


// Styles

const PageImg = styled( Img )`
    border-radius: ${ props => props.theme.base.borderRadius };
`;

const TitleLink = styled( Link )`
    text-decoration: none;
    color: ${ props => props.theme.colors.gray };

    transition: color ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        color: ${ props => transparentize( 0.15, props.theme.colors.gray ) };   
    }
`;


const Title = styled.h1`
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: 3.2rem;
    line-height: 3.8rem;
    text-align: center;
    text-transform: capitalize;
    margin: 0 0 4rem 0;

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        font-size: 4.2rem;
        line-height: 5rem;
        margin: 0 0 6rem 0;
    }
`;


const Page = ( { page } ) => {
    const { title, slug, content, featured_media } = page;

    return (
        <article>
            <header>
                <TitleLink to={ `/${ slug }` }>
                    <Title>{ title }</Title>
                </TitleLink>

                <PageImg fluid={ featured_media.localFile.childImageSharp.fluid } />
            </header>

            <ContentWrapper>
                <Content dangerouslySetInnerHTML={ { __html: content } } />
            </ContentWrapper>
        </article>
    );
};


// Proptypes
Page.propTypes = {
    page: PropTypes.shape({
        ...pagePropTypes
    })
}; 


export default Page;