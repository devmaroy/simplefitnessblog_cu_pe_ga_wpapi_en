import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';


// Styles

const Article = styled.article`
    display: flex;
`;


const Preview = ( { post } ) => {
    return (
        <Article>
            <Hero post={ post } />
        </Article>
    );
};


export default Preview;