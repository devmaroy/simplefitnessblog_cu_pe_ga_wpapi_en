import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Link, graphql, StaticQuery } from 'gatsby';


// Query

const query = graphql`
{
    allWordpressWpApiMenusMenusItems( filter:{
      name: {
        eq: "Main Menu"
      }
    }) {
      edges {
        node {
          items {
            title
            object_slug
          }
        }
      }
    }
  }
`;



// Styles

const NavigationList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;


const NavigationLink = styled( Link )`
    display: inline-block;
    text-decoration: none;
    padding: 1rem 0;
    font-size: 1.8rem;
    color: ${ props => transparentize( 0.2, props.theme.colors.light ) };

    transition: ${ props => props.theme.transitions.link };

    &:hover,
    &:focus {
        color: ${ props => props.theme.colors.light };
    }
`;


const Menu = () => {
    return (
        <StaticQuery query={ query } render={ ( props ) => {
            const menuItems = props.allWordpressWpApiMenusMenusItems.edges[0].node.items;

            return (
                <nav>
                    <NavigationList>
                        {
                            menuItems.map( ( { title, object_slug } ) => (
                                <li key={ object_slug }>
                                    <NavigationLink to={ `/${ object_slug }` }>{ title }</NavigationLink>
                                </li>
                            ))
                        }
                    </NavigationList>
                </nav>
            )
        }} />


    );
};


export default Menu;