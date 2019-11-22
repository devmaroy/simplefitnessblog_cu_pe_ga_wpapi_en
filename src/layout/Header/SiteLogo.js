import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const Logo = styled.a`
	img {
		width: 20rem;
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
			<div style={{ lineHeight: 0 }}>
				<Logo href="/">
					<img 
						src={ props.allWordpressWpLogo.edges[0].node.url.source_url } 
						alt="Site logo" 
					/>	
				</Logo>
			</div>
		) } />
	)
}

export default SiteLogo;