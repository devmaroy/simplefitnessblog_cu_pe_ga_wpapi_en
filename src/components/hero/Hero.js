import React from 'react';
import styled from 'styled-components';
import Container from '../../layout/Container';

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 45rem;
    padding: 4rem;
    background: ${ props => props.theme.colors.overlayLinearGradient }, ${ props => `url(${ props.image })` } center center/cover no-repeat;
    color: ${ props => props.theme.colors.light };
`;

const Heading = styled.h1`
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: 4.2rem;
    font-weight: ${ props => props.theme.fonts.weights.bold };
    line-height: 5rem;
`;

const Content = styled.div`
    font-size: ${ props => props.theme.fonts.sizes.normal };
    line-height: 2.9rem;

    p {
        margin: 0;
    }
`;

const Hero = ( { data } ) => {
    return (
        <HeroWrapper image={ data.featured_media.source_url }>
            <Container>
                <Heading>{ data.title }</Heading>
                <Content dangerouslySetInnerHTML={ { __html: data.content } } />
            </Container>
        </HeroWrapper>
    )
}

export default Hero;