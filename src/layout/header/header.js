import React from 'react';
import styled from 'styled-components';
import Container from '../base/Container';
import SiteLogo from './SiteLogo';
import Navigation from './Navigation';


// Styles

const HeaderWrapper = styled.header`
    margin: 2rem 0;
`;


const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const Header = () => {
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

export default Header;