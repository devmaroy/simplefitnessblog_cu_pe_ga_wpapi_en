import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const query = graphql`
{
    allWordpressWpLogo {
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

const SiteLogo = () => {
    return (
        <StaticQuery query={ query } render={ ( props ) => (
            <div>
                <img src={ props.allWordpressWpLogo.edges[0].node.url.source_url } alt="Logo" />
            </div>
        )} />
    );
};

export default SiteLogo;