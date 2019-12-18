import React from 'react';
import PropTypes from 'prop-types';
import { pagePropTypes } from '../propTypeValues';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Page from '../components/page/Page';


// Styles

const PostWrapper = styled.div`
    margin-top: 6rem;
`;


const PageTemplate = ( { data } ) => {
    const { page } = data;

    return (
        <Layout>
            <Container>
                <PostWrapper>
                    <Page page={ page } />
                </PostWrapper>
            </Container>
        </Layout>
    );
};


// Proptypes
Page.propTypes = {
    page: PropTypes.shape({
        ...pagePropTypes
    })
}; 


export default PageTemplate;


// Query
export const PageQuery = graphql`
    query( $id: String! ) {
        page: wordpressPage( id: { eq: $id } ) {
            id
            title
            slug
            content
            featured_media {
                localFile {
                    childImageSharp {
                        fluid( maxWidth: 1200, maxHeight: 700, quality: 100 ) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;