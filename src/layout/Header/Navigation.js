import React from 'react';
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

export default Navigation;