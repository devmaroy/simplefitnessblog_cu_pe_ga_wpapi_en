import React from 'react';
import styled from 'styled-components';

const Menu = styled.button`
	outline: none;
	border: none;
	box-shadow: none;
	cursor: pointer;
`;

const MenuIcon = styled.img`
	width: 2.2rem;
`;

const NavigationList = styled.ul`
	display: none;
`;


const Navigation = () => {
	return (
		<nav>
			<Menu>
				<MenuIcon src="/icons8-menu.svg" alt="Menu" />
			</Menu>
			<NavigationList>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</NavigationList>
		</nav>
	);
};

export default Navigation;









/*import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const query = graphql`
{
    allWordpressWpApiMenusMenusItems( filter: { name: { eq: "Main Menu" } } ) {
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

const Navigation = () => {
    return (
        <StaticQuery query={ query } render={ ( props ) => (
            <div>
                <ul>
                    { props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map( ( item ) => (
                        <li key={ item.object_slug }>
                            { item.title }
                        </li>
                    ))}  
                </ul>
            </div>
        )} />
    );
};

export default Navigation;*/