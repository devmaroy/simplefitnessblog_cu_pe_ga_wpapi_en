import React from 'react';
import PropTypes from 'prop-types';
import { singlePostPropTypes } from '../propTypeValues';
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


PostTemplate.propTypes = {
    data: PropTypes.shape({
        post: PropTypes.shape({
            ...singlePostPropTypes
        }).isRequired
    }).isRequired,
};


export default PostTemplate;


// Query
export const query = graphql`
    query( $id: String! ) {
        post: wordpressPost( id: { eq: $id } ) {
            ...PostData
        }
    }
`;