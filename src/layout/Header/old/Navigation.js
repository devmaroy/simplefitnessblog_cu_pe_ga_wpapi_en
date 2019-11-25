import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Social from './Social';


// Styles

const NavigationWrapper = styled.div`
    position: fixed;
	top: 0;
	right: 0;
	z-index: 99;
    width: 20rem;
	height: 100%;
	padding: 4rem;
    background: ${ props => props.theme.colors.primary };
    transform: translateX( ${ props => props.showMenu ? '0rem' : '29rem'} );

    transition: transform .25s ease;
`;

const Overlay = styled.div`
    position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
    visibility: ${ props => props.showMenu ? 'visible' : 'hidden' };
	opacity: ${ props => props.showMenu ? '1' : '0' };
	background: ${ props => props.theme.colors.transparentBlack };

	transition: opacity .25s ease, visibility 0s ease;
`;


class Navigation extends Component {
    render() {
        return (
            <div>
                <NavigationWrapper>
                    <Menu />
                    <Social />
                </NavigationWrapper>
                <Overlay />
            </div>
        );
    }
}

export default Navigation;