import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Hero from '../components/hero/Hero';
import Container from '../layout/Container';

const HeroWrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) center center / cover, url('bg.jpg');
    background-size: cover;
    min-height: 30rem;
    padding: 4rem;
    border-radius: 1rem;
    color: #fff;
`;


const PageWrapper = styled.div`
    margin: 6rem 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) center center / cover, url('bg.jpg');
    background-size: cover;
    height: 30rem;
    border-radius: 1rem;
    color: #fff;
    padding: 4rem;
    
`;
//data.page.featured_media.source_url
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