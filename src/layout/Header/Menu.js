import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { transparentize } from 'polished';


// Styled

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
    
    padding: 1rem 0;
    font-family: ${ props => props.theme.fonts.secondary };
    font-weight: bold;
    color: ${ props => transparentize( 0.2, props.theme.colors.gray ) };
    color: #626b76;

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
        <nav>
            <MenuList>
                <MenuListItem>
                    <MenuLink to="/">Home</MenuLink>
                </MenuListItem>
                <MenuListItem>
                    <MenuLink to="/" >Elements</MenuLink>
                </MenuListItem>
                <MenuListItem>
                    <MenuLink to="/">Membership</MenuLink>
                </MenuListItem>
                <MenuListItem>
                    <MenuLink to="/">Contact</MenuLink>
                </MenuListItem>
            </MenuList>
        </nav>
    );
};

export default Menu;