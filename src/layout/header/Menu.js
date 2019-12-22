import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { createLocalLink, isExternalLink } from '../../../utils/helpers/links';


// Query

const query = graphql`
    {
        allWordpressWpApiMenusMenusItems( filter: {
            name: {
                eq: "Main Menu"
            }
        }) {
            edges {
                node {
                    items {
                        object_id
                        title
                        url
                    }
                }
            }
        }
        allWordpressSiteMetadata {
            edges {
                node {
                    url
                }
            }
        }
    }
`;



// Styles

const MenuList = styled.ul`
    flex: 1 0 auto;
    list-style: none;
    margin: 4rem 0 4rem 0;
    padding: 0;

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        margin: 0 6rem 0 6rem;
    }
`;


const MenuListItem = styled.li`
    display: block;
    margin: 0;

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        display: inline-block;

        &:not( :last-child ) {
            margin-right: 3rem;
        }
    }
`;


const MenuLink = styled( Link )`
    display: block;
    text-decoration: none;

    font-family: ${ props => props.theme.fonts.secondary };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    padding: 1rem 0;
    color: ${ props => props.theme.colors.offGray };

    transition: color ${ props => props.theme.transitions.link };

    &.active {
        color: ${ props => props.theme.colors.primary };
    }

    &:hover,
    &:focus {
        color: ${ props => props.theme.colors.primary };
    }

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        display: inline-block;
        padding: 0;
    }
`;


const Menu = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;
            const wordpressUrl = data.allWordpressSiteMetadata.edges[0].node.url;

            return (
                <nav>
                    <MenuList>
                        {
                            menuItems.map( ( { object_id, title, url } ) => (
                                <MenuListItem key={ object_id }>
                                    {
                                        isExternalLink( url, wordpressUrl ) ? (
                                            <MenuLink href={ url } as="a">{ title }</MenuLink>
                                        ) : (
                                            <MenuLink to={ createLocalLink( url, wordpressUrl )  }>{ title }</MenuLink>
                                        )
                                    }
                                </MenuListItem>
                            ))
                        }
                    </MenuList>
                </nav>
            )
        }} />
    )
}


export default Menu;