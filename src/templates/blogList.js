import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Preview from '../components/post/Preview';


// Styles

const BlogListWrapper = styled.div`
    margin-top: 8rem;
`;

const BlogList = ( { data } ) => {
    const posts = data.allWordpressPost.edges;

    return (
        <Layout>
            <Container>
                <BlogListWrapper>
                    {
                        posts.map( ( { node } ) => (
                            <Preview key={ node.id } post={ node } />
                        ))
                    }
                </BlogListWrapper>
            </Container>
        </Layout>
    );
};

export default BlogList;


// Template Query

export const templateQuery = graphql`
    query( $skip: Int!, $limit: Int! ) {
        allWordpressPost( skip: $skip, limit: $limit ) {
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