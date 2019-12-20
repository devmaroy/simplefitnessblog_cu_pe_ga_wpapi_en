import React from 'react';
import PropTypes from 'prop-types';
import { allPostPropTypes, taxonomyPropTypes, contextPropTypes } from '../propTypeValues';
import { graphql } from 'gatsby';
import TaxonomyBaseTemplate from './taxonomyBase';


const TagListTemplate = ( { data, pageContext } ) => {
    const info = {
        type: 'tag',
        ...data.tag
    }
    
    return (
        <div>
            <TaxonomyBaseTemplate info={ info } content={ data.posts.edges } context={ pageContext } />
        </div>
    );
};


TagListTemplate.propTypes = {
    pageContext: PropTypes.shape({
        ...contextPropTypes
    }).isRequired,
    data: PropTypes.shape({
        tag: PropTypes.shape({
            ...taxonomyPropTypes
        }).isRequired,
        posts: PropTypes.shape({
            edges: PropTypes.arrayOf( PropTypes.shape({
                node: PropTypes.shape({
                    ...allPostPropTypes
                }).isRequired
            }).isRequired )
        }).isRequired 
    }).isRequired,
};


export default TagListTemplate;



// Template Query

export const templateQuery = graphql`
    query( $id: String!, $skip: Int!, $limit: Int! ) {
        tag: wordpressTag( id: { eq: $id } ) {
            ...TagData
        }
        posts: allWordpressPost( limit: $limit, skip: $skip, filter: {
            tags: {
                elemMatch: {
                    id: {
                        eq: $id
                    }
                }
            }
        }) {
            edges {
                node {
                    ...AllPostData
                }
            }
        }
    }
`;