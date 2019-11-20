import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const Logo = styled.a`
	img {
		width: 200px;
	}
`;

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
                <Logo href="/">
                  <img src="/logo.svg" alt=""/>
                </Logo>
            </div>
        )} />
    );
};

export default SiteLogo;

//<img src={ props.allWordpressWpLogo.edges[0].node.url.source_url } alt="Logo" width="200" />