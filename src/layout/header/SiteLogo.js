import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery, Link } from 'gatsby';
import { darken } from 'polished';


// Styles

const Logo = styled( Link )`
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: 2.2rem;
    font-weight: ${ props => props.theme.fonts.weights.bold };
    color: ${ props => props.theme.colors.primary };

    transition: ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        color: ${ props => darken( 0.1, props.theme.colors.primary ) };
    }
`;



// Query

const query = graphql`
    {
        allWordpressSiteMetadata {
            edges {
                node {
                    name
                }
            }
        }
    }
`;


const SiteLogo = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
           const logo = data.allWordpressSiteMetadata.edges[0].node.name;

            return (
                <Logo to="/blog">
                    { logo }
                </Logo>
            )
        }} />
    );
};


export default SiteLogo;