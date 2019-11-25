import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Link } from 'gatsby';


// Styled

const NavigationList = styled.ul`
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

const Navigation = () => {
	return (
		<nav>
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

export default Navigation;


/*import React, { Component } from 'react';
import styled from 'styled-components';
import { transparentize, timingFunctions } from 'polished';
import { Link } from 'gatsby';


// Styles

const NavigationList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;

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

const Menu = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
`;

const NavigationOverlay = styled.div`
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
	constructor( props ) {
		super( props );

		this.state = {
			showMenu: false
		};
	}

	toggleMenu = () => {
		this.setState( ( { showMenu }) => ({
			showMenu: ! showMenu
		}));
	}

	render() {
		return (
			<div>
				<nav>
					hi
				</nav>
				
			</div>


			
		);
	}
}

export default Navigation;
*/

/*<nav>
			{  prejmenuj navigation na sidebar nebo to rozdel do KOMPONENTU !!do nav tagu dej jenom to co se tyka navigace hlavni.. a pak dej dalsi element
				obalovaci do ktereho das social links
			}
				<Menu onClick={ this.toggleMenu }>
					<img src="ico/menu.svg" alt="Menu Icon" />
				</Menu>

				<NavContentWrapper>

				</NavContentWrapper>

				<NavigationList showMenu={ this.state.showMenu }>
					<li>
						<NavigationLink to="/">
							Elements
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/">
							Portfolio
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/">
							Blog
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/">
							Shop
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/">
							What's New
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/">
							Demos
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/">
							Purchase
						</NavigationLink>
					</li>
				</NavigationList>

				

				<NavigationOverlay onClick={ this.toggleMenu } showMenu={ this.state.showMenu } />
		</nav>*/