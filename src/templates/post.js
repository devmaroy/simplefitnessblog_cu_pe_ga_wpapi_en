import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Post from '../components/post/Post';


// Styles

const PostWrapper = styled.div`
    margin-top: 8rem;
`;

const post = ( { data } ) => {
    const { post } = data;

    return (
        <Layout>
            <Container>
                <PostWrapper>
                    <Post post={ post } />
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
            featured_media {
                source_url
            }
        }
    }
`;