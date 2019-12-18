import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Social from './Social';
import menuIcon from '../../images/icons/menu.svg';


// Styles

const MenuIcon = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background: none;

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        display: none;
    }
`;


const NavigationInner = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: ${ props => props.showMenu ? '50%' : '100%' };
    z-index: 99;
    width: 100%;
    height: 100%;
    padding: 0 3rem;
    border-left: .1rem solid #eee;
    background: ${ props => props.theme.colors.light };

    transition: left .5s;

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        display: flex;
        position: static;
        width: auto;
        height: auto;
        border: none;
        padding: 0;
    }
`;


const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    width: 100%;
    height: 100%;
    z-index: 90;
    visibility: ${ props => props.showMenu ? 'visible' : 'hidden' };
    opacity: ${ props => props.showMenu ? '.3' : '0' };

	transition: opacity .25s ease, visibility .25s ease;

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        display: none;
    }
`;


class Navigation extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            showMenu: false
        }
    }

    toggleMenu = () => {
        this.setState(( { showMenu } ) => ({
            showMenu: ! showMenu
        })); 
    } 

    render() {
        return (
            <div> 
                <MenuIcon onClick={ this.toggleMenu }>
                    <img src={ menuIcon } alt="Hamburger menu icon" />
                </MenuIcon>
    
                <NavigationInner showMenu={ this.state.showMenu }>
                    <Menu />
                    <Social />
                </NavigationInner>

                <Overlay showMenu={ this.state.showMenu } onClick={ this.toggleMenu } />
            </div>
        );
    }
}

export default Navigation;