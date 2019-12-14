import React from 'react';
import styled, { withTheme } from 'styled-components';
import Container from '../base/Container';
import SiteLogo from './SiteLogo';
import Navigation from './Navigation';


// Styles

const HeaderWrapper = styled.header`
    margin: 3rem 0;
`;


const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const Header = ( props ) => {
    console.log( props );
    return (
        <HeaderWrapper>
            <Container>
                <HeaderInner>
                    <SiteLogo />
                    <Navigation />
                </HeaderInner>
            </Container>
        </HeaderWrapper>
    );
};

export default withTheme( Header );






