import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const Logo = styled.a`
	img {
		width: ${ props => props.width };
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


const SiteLogo = ( props ) => {
	console.log( props );
	return (
		<StaticQuery query={ query } render={ ( data ) => (
			<div style={{ lineHeight: 0 }}>
				{ console.log( props )}
				<Logo href="/home" width={ props.width }>
					<img 
						src={ data.allWordpressWpLogo.edges[0].node.url.source_url } 
						alt="Site logo" 
					/>	
				</Logo>
			</div>
		) } />
	)
}

export default SiteLogo;