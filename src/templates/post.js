import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/base/Layout';
import Post from '../components/post/Post';


const PostTemplate = ( { data } ) => {
    const { post } = data;
    
    return (
        <Layout>
            <Post post={ post } />
        </Layout>
    );
};


export default PostTemplate;


// Query
export const templateQuery = graphql`
    query( $id: String! ) {
        post: wordpressPost( id: { eq: $id } ) {
            title
            slug
            content
            plainDate: date
            date( formatString: "MMMM DD, YYYY" )
            author {
                name
                url
                description
                avatar_urls {
                    wordpress_96
                }
                social_links {
                    title
                    url
                }
            }
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
                localFile {
                    childImageSharp {
                        fluid( maxWidth: 2560, quality: 100 ) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;