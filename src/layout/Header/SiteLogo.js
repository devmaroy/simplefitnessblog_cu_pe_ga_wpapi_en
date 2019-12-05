import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery, Link } from 'gatsby';


// Styles

const Logo = styled( Link )`
    line-height: 0;
    
    img {
        width: ${ props => props.styled.width };
    }
`;

Logo.defaultProps = {
    styled: {
        width: '20rem'
    }
}


// Query

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
        <StaticQuery query={ query } render={ ( data ) => {
            const logoURL = data.allWordpressWpLogo.edges[0].node.url.source_url;

            return (
                <Logo to="/blog">
                    <img src={ logoURL } alt="Site logo" />
                </Logo>
            )
        }} />
    );
};


export default SiteLogo;