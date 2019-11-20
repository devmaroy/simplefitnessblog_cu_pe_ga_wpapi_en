import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import Container from '../layout/Container';


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
`;