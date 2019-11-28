import React from 'react';
import { graphql } from 'gatsby';
import TaxonomyBase from './taxonomyBase';

const Category = ( { data } ) => {
    const info = {
        type: 'category',
        ...data.category
    }
    
    return (
        <div>
            <TaxonomyBase info={ info } content={ data.posts.edges } />
        </div>
    );
};

export default Category;


// Query

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


    

/*import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Teaser from '../components/post/Teaser';


// Styles

const CategoryWrapper = styled.div`
    margin-top: 8rem;
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: 1.8rem;
    color: ${ props => props.theme.colors.lightGray };

    strong {
        font-weight: ${ props => props.theme.fonts.weights.medium };
    }
`;

const PostsWrapper = styled.div`
    margin-top: 8rem;
`;

const category = ( { data } ) => {
    const { category, posts } = data;

    return (
        <Layout>
            <Container>
                <CategoryWrapper>
                    <p>
                        Browsing category:  
                        <strong 
                            dangerouslySetInnerHTML={ { __html: ` "${ category.name }"` } } 
                        />
                    </p>
                </CategoryWrapper>
                <PostsWrapper>
                    {
                        posts.edges.map( ( { node } ) => (
                            <Teaser key={ node.id } post={ node } isTeaser={ true } />
                        ))
                    }
                </PostsWrapper>
            </Container>
        </Layout>
    );
};

export default category;


// Query
export const CategoryQuery = graphql`
    query ( $id: String!, $name: String! ) {
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
*/
// /* <CategoryHeading dangerouslySetInnerHTML={ { __html: data.category.name } } />