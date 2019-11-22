import React from 'react';
import Layout from '../layout/base/Layout';
import { graphql } from 'gatsby';

const page = ( { data } ) => {
    return (
        <Layout>
            <div>
                <h1>{ data.page.title }</h1>
                <div dangerouslySetInnerHTML={ { __html: data.page.content } } />
            </div>
        </Layout>
    );
};

export default page;


// Query
export const PageQuery = graphql`
    query( $id: String! ) {
        page: wordpressPage( id: { eq: $id } ) {
            title
            content
        }
    }
`;