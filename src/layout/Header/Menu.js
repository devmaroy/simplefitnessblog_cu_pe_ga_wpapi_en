import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';


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
                        title
                        url
                        object_slug
                    }
                }
            }
        }
    }
`;



// Styles

const MenuList = styled.ul`
    list-style: none;
    margin: 4rem 0 4rem 0;
    padding: 0;

    @media ( min-width: 858px ) {
        margin: 0 6rem 0 0;
    }
`;


const MenuListItem = styled.li`
    display: block;
    margin: 0;

    @media ( min-width: 858px ) {
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

    &:hover,
    &:focus {
        color: ${ props => props.theme.colors.primary };
    }

    @media ( min-width: 858px ) {
        display: inline-block;
        padding: 0;
    }
`;


const Menu = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const links = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;

            return (
                <nav>
                    <MenuList>
                        {
                            links.map( ( { title, object_slug } ) => (
                                <MenuListItem key={ title }>
                                    <MenuLink to={ `/${ object_slug }` }>{ title }</MenuLink>
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