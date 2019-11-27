import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Hero from '../components/hero/Hero';
import Teaser from '../components/post/Teaser';


// Styles

const PostsWrapper = styled.div`
    margin-top: 8rem;
`;


const postsUnderContent = ( { data } ) => {
    const { page, posts } = data;

    return (
        <Layout>
            <Hero data={ page } />
            <Container>
                <PostsWrapper>
                    { posts.edges.map( ( { node } ) => (
                        <Teaser key={ node.id } post={ node } isTeaser={ true } />
                    )) }
                </PostsWrapper>
            </Container>
        </Layout>
    )
}


export default postsUnderContent;


// Query
export const Query = graphql`
    query( $id: String! ) {
        page: wordpressPage( id: { eq: $id } ) {
            title
            content
            featured_media {
                source_url
            }
        }
        posts: allWordpressPost( sort: { fields: [date], order: DESC } ) {
            edges {
                node {
                    id
                    title
                    slug
                    plainDate: date
                    date( formatString: "MMMM DD, YYYY" )
                    excerpt
                    categories {
                        id
                        name
                        slug
                    }
                    featured_media {
                        source_url
                    }
                }
            }
        }
    }    
`;