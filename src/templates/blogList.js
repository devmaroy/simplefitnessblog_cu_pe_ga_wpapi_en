import React from 'react';
import PropTypes from 'prop-types';
import { allPostPropTypes, contextPropTypes } from '../propTypeValues';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Preview from '../components/post/Preview';
import Pagination from '../components/base/Pagination';


// Styles

const BlogListWrapper = styled.div`
    display: grid;
    grid-gap: 4rem;
    margin-top: 4rem;
     
    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        grid-template-columns: repeat( 2, minmax( 0, 1fr ) );
        grid-gap: 2rem;
        margin-top: 8rem;
    }

    @media ( min-width: ${ props => props.theme.breakpoints.large } ) {
        grid-template-columns: repeat( 3, minmax( 0, 1fr ) );
    }
`;


const BlogListTemplate = ( { data, pageContext } ) => {
    const posts = data.allWordpressPost.edges;
    const { currentPage, numPages } = pageContext;

    return (
        <Layout>
            <Container>
                <BlogListWrapper>
                    {
                        posts.map( ( { node: post } ) => (
                            <Preview key={ post.id } post={ post } />
                        ))
                    }
                </BlogListWrapper>

                <Pagination 
                    numberOfPages={ numPages } 
                    currentPage={ currentPage } 
                    prefix="blog" 
                />
            </Container>
        </Layout>
    );
};


BlogListTemplate.propTypes = {
    pageContext: PropTypes.shape({
        ...contextPropTypes
    }).isRequired,
    data: PropTypes.shape({
        allWordpressPost: PropTypes.shape({
            edges: PropTypes.arrayOf( PropTypes.shape({
                node: PropTypes.shape({
                    ...allPostPropTypes
                }).isRequired
            }).isRequired ).isRequired,
        }).isRequired
    }).isRequired,
};


export default BlogListTemplate;



// Template Query

export const templateQuery = graphql`
    query( $skip: Int!, $limit: Int! ) {
        allWordpressPost( sort: { fields: [ date ], order: DESC } , skip: $skip, limit: $limit ) {
            edges {
                node {
                    id
                    title
                    slug
                    plainDate: date
                    date( formatString: "MMMM DD, YYYY" )
                    author {
                        name
                        url
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
                                fluid( maxWidth: 1200, quality: 100 ) {
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