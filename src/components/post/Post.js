import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { AuthorAvatar, AuthorName, Content } from '../elements/Content';
import Hero from './Hero';
import Container from '../../layout/base/Container';
import SocialLinks from '../base/SocialLinks';
import { DiscussionEmbed } from 'disqus-react';


// Styles

const ContentWrapper = styled.div`
    margin: 8rem 0;
`;

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

const FooterAuthorAvatar = styled.div`
    flex-shrink: 0;
    margin-right: 3rem;

    ${ AuthorAvatar } {
        width: 8rem;
    }
`;

const FooterAuthorInfo = styled.div`
    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        max-width: 80%;
    }

    ${ AuthorName } {
        font-family: ${ props => props.theme.fonts.secondary };
        font-size: 2.2rem;
        font-weight: ${ props => props.theme.fonts.weights.medium };
        color: ${ props => props.theme.colors.dark };
        margin: 0; 

        &:hover,
        &:focus {
            color: ${ props => props.theme.colors.primary };
        }
    }
`;



const Post = ( { post } ) => {
    const { author } = post;

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: post.slug, title: post.title },
    };

    const stylesCover = {
        borderRadius: '0'
    }

    const stylesContent = {
        minHeight: '66rem',
        padding: '8rem 0'
    }

    return (
        <article>
            <Hero
                post={ post }
                settings={{
                    largeTitle: true,
                    showTags: true,
                    wrapContent: true
                }}
                styles={{
                    cover: stylesCover,
                    content: stylesContent
                }}
            />
       
            <Container>
                <ContentWrapper>
                    <Content dangerouslySetInnerHTML={ { __html: post.content } } />       
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


export default Post;