import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Link } from 'gatsby';


// Styles
const MenuIcon = styled.button`
    
`;

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
        <nav>
            <MenuIcon>
                <img src="/ico/menu.svg" alt="Menu icon" />
            </MenuIcon>

            <NavigationList>
                <li>
                    <NavigationLink to="/">Elements</NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/">Portfolio</NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/">Blog</NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/">Shop</NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/">What's New</NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/">Demos</NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/">Purchase</NavigationLink>
                </li>
            </NavigationList>
        </nav>
    );
};

export default Menu;