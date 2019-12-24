import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';


// Query
const query = graphql`
    {
        allWordpressWpFavicon {
            edges {
                node {
                    url {
                        source_url
                    }
                }
            }
        }
        allWordpressSiteMetadata {
            edges {
                node {
                    name
                    description
                }
            }
        }
    }
`;


const Meta = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const { allWordpressWpFavicon, allWordpressSiteMetadata } = data;

            return (
                <Helmet>
                    <title>{ `${ allWordpressSiteMetadata.edges[0].node.name } - ${ allWordpressSiteMetadata.edges[0].node.description }` }</title>
                    <link rel="icon" href={ allWordpressWpFavicon.edges[0].node.url.source_url } />
                </Helmet>
            )
        }} />
    )
}


export default Meta;