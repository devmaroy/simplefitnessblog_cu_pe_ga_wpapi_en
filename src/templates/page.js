import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Page from '../components/page/Page';


// Styles

const PostWrapper = styled.div`
    margin-top: 8rem;
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


export default PageTemplate;


// Query
export const PageQuery = graphql`
    query( $id: String! ) {
        page: wordpressPage( id: { eq: $id } ) {
            id
            title
            slug
            content
        }
    }
`;