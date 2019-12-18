const slash = require( 'slash' );
const pageTemplate = require.resolve( '../src/templates/page.js' );


module.exports = ( { data, createPage } ) => {

    // Create pages

    data.edges.map( ( { node } ) => {
        
        // Create page 
        createPage({
            path: `${ node.slug }`,
            component: slash( pageTemplate ),
            context: {
                id: node.id,
            }
        });
    });
};