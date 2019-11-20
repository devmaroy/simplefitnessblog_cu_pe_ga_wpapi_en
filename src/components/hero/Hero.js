import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
    margin: 10rem 0;
`;

const Hero = ( { data } ) => {
    return (
        <HeroWrapper>
            <h1>{ data.title }</h1>
            <div dangerouslySetInnerHTML={ { __html: data.content } } />
        </HeroWrapper>
    );
};

export default Hero;