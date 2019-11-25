import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Menu from './Menu';
import Social from './Social';


// Styles

const MenuIcon = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
`; 

const NavigationWrapper = styled.div`

`;

const NavigationInner = styled.div`
    position: fixed;
	top: 0;
	right: 0;
	z-index: 99;
	width: 20rem;
	height: 100%;
	padding: 4rem;
	background: ${ props => props.theme.colors.primary };
	//transform: translateX( ${ props => props.showMenu ? '0rem' : '29rem'} );
	
	transition: transform .25s ease;
`;


const Overlay = styled.div`
    position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	//visibility: ${ props => props.showMenu ? 'visible' : 'hidden' };
	//opacity: ${ props => props.showMenu ? '1' : '0' };
	background: ${ props => props.theme.colors.transparentBlack };

	transition: opacity .25s ease, visibility 0s ease;
`;


const Navigation = () => {
    return (
        <div>
            <MenuIcon>
                <img src="/ico/menu.svg" alt="Menu icon" />
            </MenuIcon>

            <NavigationWrapper>
                <NavigationInner>
                    <Menu />
                    <Social />
                </NavigationInner>

                <Overlay />
            </NavigationWrapper>
        </div>
    );
};

export default Navigation;