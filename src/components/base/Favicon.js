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
    }
`;


const Favicon = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => (
            <Helmet>
                <link rel="icon" href={ data.allWordpressWpFavicon.edges[0].node.url.source_url } />
            </Helmet>
        )} />
    );
};


export default Favicon;