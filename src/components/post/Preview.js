import React from 'react';
import Hero from './Hero';


const Preview = ( { post } ) => {
    return (
        <article>
            <Hero post={ post } />
        </article>
    );
};


export default Preview;