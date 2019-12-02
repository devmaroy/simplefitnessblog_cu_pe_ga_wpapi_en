import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';


// Styles

const Logo = styled( Link )`
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
	return (
		<StaticQuery query={ query } render={ ( data ) => (
			<Logo to="/blog" width={ props.width } style={ { lineHeight: 0 } } >
				<img 
					src={ data.allWordpressWpLogo.edges[0].node.url.source_url } 
					alt="Site logo" 
				/>	
			</Logo>
		) } />
	)
}


export default SiteLogo;