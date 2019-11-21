import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${ props => `url( ${ props.image } )`} center center/cover no-repeat;
    margin: 6rem 0;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    min-height: 35rem;
`;

const Hero = ( { data } ) => {
    return (
        <HeroWrapper image={ data.featured_media.source_url }>
            <div>
                <h1>{ data.title }</h1>
                <div dangerouslySetInnerHTML={ { __html: data.content } } />
            </div>
        </HeroWrapper>
    );
};

export default Hero;