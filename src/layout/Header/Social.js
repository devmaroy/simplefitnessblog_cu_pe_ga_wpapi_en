import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SocialLinks from '../../components/base/SocialLinks';


// Query

const query = graphql`
    {
        allWordpressWpApiMenusMenusItems( filter: {
            name: {
                eq: "Main Social Links"
            }
        }) {
            edges {
                node {
                    items {
                        title
                        url
                    }
                }
            }
        }
    }
`;


const Social = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const links = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;

            return (
                <SocialLinks links={ links } fixedWidth={ true } />
            )
        }} />

    );
};


export default Social;