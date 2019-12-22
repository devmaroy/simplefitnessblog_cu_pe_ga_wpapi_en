const slash = require( 'slash' );
const pageTemplate = require.resolve( '../../src/templates/page.js' );
const postTemplate = require.resolve( '../../src/templates/post.js' );
const categoryListTemplate = require.resolve( '../../src/templates/categoryList.js' );
const tagListTemplate = require.resolve( '../../src/templates/tagList.js' );

console.log( 'helllo');

module.exports = async ( { actions, graphql } ) => {
    const getData = `
        {
            allWordpressPage {
                edges {
                    node {
                        id
                        path
                        slug
                        status
                    }
                }
            }
            allWordpressPost {
                edges {
                    node {
                        id
                        path
                        slug
                        status
                        format
                    }
                }
            }
            allWordpressCategory {
                edges {
                    node {
                        id
                        name
                        slug
                        count
                    }
                }
            }
            allWordpressTag {
                edges {
                    node {
                        id
                        name
                        slug
                        count
                    }
                }
            }
        }
    `;


    const { createPage } = actions;

    const fetchData = async () => {
        const allData = await graphql( getData );

        // Check for any errors
        if ( allData.errors ) {
            throw new Error( allData.errors );
        }

        return allData.data;
    }


    const data = await fetchData();

    createPages( { data,  } );

    /*

    pages.edges.map( ( { node } ) => {
        createPage({
            path: `${ node.slug }`,
            component: slash( pageTemplate ),
            context: {
                id: node.id,
            }
        });
    });*/
}