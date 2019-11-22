import React from 'react';
import styled from 'styled-components';
import Container from '../../layout/Container';

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 45rem;
    padding: 4rem;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${ props => `url( ${ props.image } )`} center center/cover no-repeat;
    color: ${ props => props.theme.colors.light };
`;

const Hero = ( { data } ) => {
    return (
        <HeroWrapper image={ data.featured_media.source_url }>
            <Container>
                <h1>{ data.title }</h1>
                <div dangerouslySetInnerHTML={ { __html: data.content } } />
            </Container>
        </HeroWrapper>
    )
}

export default Hero;




/*import React from 'react';
import styled from 'styled-components';
import Container from '../../layout/Container';

const HeroWrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${ props => `url( ${ props.image } )`} center center/cover no-repeat;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    min-height: 45rem;
`;

const Hero = ( { data } ) => {
    return (
        <HeroWrapper image={ data.featured_media.source_url }>
            <Container>
                <h1>{ data.title }</h1>
                <div dangerouslySetInnerHTML={ { __html: data.content } } />
            </Container>
        </HeroWrapper>
    );
};

export default Hero;*/