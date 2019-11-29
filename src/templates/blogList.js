import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';


const blogList = ( { data } ) => {
    const posts = data.allWordpressPost.edges;

    return (
        <Layout>
            <Container>
                <div>
                    {
                        posts.map( ( { node } ) => (
                            <div key={ node.id }>
                                <h3>{ node.title }</h3>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </Layout>
    );
};

export default blogList;


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