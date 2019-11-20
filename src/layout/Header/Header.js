import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import SiteLogo from './SiteLogo';
import Navigation from './Navigation';

const HeaderWrapper = styled.header`
    margin: 2rem 0;
    color: black;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <SiteLogo />
                <Navigation />
            </Container>
        </HeaderWrapper>
    );
};

export default Header;