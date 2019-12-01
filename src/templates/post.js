import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Post from '../components/post/Post';
import { DiscussionEmbed } from 'disqus-react';


// Styles

const PostWrapper = styled.div`
    margin-top: 8rem;
`;


const post = ( { data } ) => {
    const { post } = data;

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: post.slug, title: post.title },
    }

    return (
        <Layout>
            <Container>
                <PostWrapper>
                    <Post post={ post } />
                    <DiscussionEmbed {...disqusConfig} />
                </PostWrapper>
            </Container>      
        </Layout>
    );
};


export default post;


// Query
export const Query = graphql`
    query( $id: String! ) {
        post: wordpressPost( id: { eq: $id } ) {
            title
            slug
            content
            plainDate: date
            date( formatString: "MMMM DD, YYYY" )
            categories {
                id
                name
                slug
            }
            tags {
                id
                name
                slug
            }
            featured_media {
                source_url
            }
        }
    }
`;