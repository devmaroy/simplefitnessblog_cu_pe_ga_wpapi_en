import React from 'react';
import PropTypes from 'prop-types';
import { singlePostPropTypes } from '../../propTypeValues';
import styled from 'styled-components';
import { lighten } from 'polished';
import Hero from './Hero';
import Container from '../../layout/base/Container';
import {
    ContentWrapper,
    Content,
} from '../elements/Content';
import SocialLinks from '../base/SocialLinks';
import { DiscussionEmbed } from 'disqus-react';


// Styles

const Footer = styled.footer`
    background: ${ props => lighten( 0.51, props.theme.colors.lightGray ) };
    padding: 3rem;
    text-align: center;
    line-height: 3.2rem;
    border-radius: ${ props => props.theme.base.borderRadius };
    margin: 10rem 0;

    color: ${ props => props.theme.colors.gray };

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        display: flex;
        padding: 6rem;
        text-align: left;
    }
`;


const AuthorAvatar = styled.img`
    border-radius: 50%;
    width: 8rem;
`;


const AuthorName = styled.a`
    text-decoration: none;
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: 2.2rem;
    font-weight: ${ props => props.theme.fonts.weights.medium };
    color: ${ props => props.theme.colors.dark };
 
    transition: color ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        color: ${ props => props.theme.colors.primary };
    }
`;


const FooterAuthorAvatar = styled.div`
    flex-shrink: 0;
    margin-bottom: 2rem;
    
    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        margin-right: 3rem;
    }
`;


const FooterAuthorInfo = styled.div`
    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        max-width: 80%;
    }
`;


const Post = ( { post } ) => {
    const { content, author } = post;

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: post.slug, title: post.title },
    };

    const stylesCover = {
        borderRadius: '0'
    }

    const stylesContent = {
        padding: '8rem 0'
    }

    return (
        <article>
            <Hero
                post={ post }
                settings={{
                    wrapContent: true,
                    largeTitle: true,
                    showTags: true,
                }}
                styles={{
                    cover: stylesCover,
                    content: stylesContent,
                }}
            />

            <Container>
                <ContentWrapper>
                    <Content dangerouslySetInnerHTML={ { __html: content } } />
                </ContentWrapper>

                <Footer>
                    <FooterAuthorAvatar>
                        <AuthorAvatar src={ author.avatar_urls.wordpress_96 } alt={ `Avatar for ${ author.name }` } />
                    </FooterAuthorAvatar>

                    <FooterAuthorInfo>
                        <AuthorName href={ author.url }>{ author.name }</AuthorName>
                        <p>{ author.description }</p> 

                        <SocialLinks links={ author.social_links } />
                    </FooterAuthorInfo>
                </Footer>

                <DiscussionEmbed {...disqusConfig} />
            </Container>
        </article>
    );
};


Post.propTypes = {
    post: PropTypes.shape({
        ...singlePostPropTypes
    }).isRequired,
};


export default Post;