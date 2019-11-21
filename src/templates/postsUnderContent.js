import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Hero from '../components/hero/Hero';
import Container from '../layout/Container';
import Post from '../components/post/Post';


const PostsWrapper = styled.div`
    
`;

const postsUnderContent = ( { data } ) => {
    return (
        <Layout>
            <Container>
                <Hero data={ data.page } />
                <PostsWrapper>
                    { data.posts.edges.map( ( { node } ) => (
                        <article key={ node.id }>
                            <h3>{ node.title }</h3>
                            <img src={ node.featured_media.source_url } alt="Post image" />
                            <div dangerouslySetInnerHTML={ { __html: node.excerpt } } />
                        </article>
                    )) }
                </PostsWrapper>
            </Container>
        </Layout>
    );
};

export default postsUnderContent;

/* <h1>{ data.page.title }</h1>
                    <div dangerouslySetInnerHTML={ { __html: data.page.content } } />
                // </PageWrapper*/


// Query
export const PostsUnderContentQuery = graphql`
    query( $id: String! ) {
        page: wordpressPage( id: { eq: $id }) {
            title
            content
            featured_media {
                source_url
            }
        }
        posts: allWordpressPost {
            edges {
                node {
                    id
                    title
                    excerpt
                    featured_media {
                        source_url
                    }
                }
            }
        }
    }
`;



/*import React from 'react';


const postsUnderContent = ( { data } ) => {
    return (
        <Layout>
            <Container>
                
              { data.posts.edges.map(( { node } ) => (
                  <article key={ node.id }>
                    <h3>{ node.title }</h3>
                    <div dangerouslySetInnerHTML={ { __html: node.excerpt } } />
                  </article>
              ))}
            </Container>
        </Layout>
    );
};

export default postsUnderContent;


// Query
export const PostsUnderContentQuery = graphql`
    query {
        posts: allWordpressPost {
            edges {
                node {
                    id
                    title
                    excerpt
                }
            }
        }
    }
`;*/