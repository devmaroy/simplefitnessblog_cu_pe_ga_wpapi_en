import React from 'react';
import { graphql } from 'gatsby';
import TaxonomyBaseTemplate from './TaxonomyBase';


const CategoryTemplate = ( { data } ) => {
    const info = {
        type: 'category',
        ...data.category
    }
    
    return (
        <div>
            <TaxonomyBaseTemplate info={ info } content={ data.posts.edges } />
        </div>
    );
};

export default CategoryTemplate;



// Template Query

export const templateQuery = graphql`
    query( $id: String!, $name: String! ) {
        category: wordpressCategory( id: { eq: $id } ) {
            id
            name
            slug
        }
        posts: allWordpressPost( filter: {
            categories: {
                elemMatch: {
                    name: {
                        eq: $name
                    }
                }
            }
        }) {
            edges {
                node {
                    id
                    title
                    slug
                    plainDate: date
                    date( formatString: "MMMM DD, YYYY" )
                    excerpt
                    author {
                        name
                        url
                        description
                        avatar_urls {
                            wordpress_96
                        }
                    }
                    categories {
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
        }
    }
`; 