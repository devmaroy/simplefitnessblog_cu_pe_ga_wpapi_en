import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';



const post = ( { data } ) => {
    const { post } = data;

    return (
        <Layout>
            <Container>
                <h1>{ post.title }</h1>
                <div dangerouslySetInnerHTML={ { __html: post.content } } />
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
            content
            plainDate: date
            date( formatString: "MMMM DD, YYYY" )
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
`;