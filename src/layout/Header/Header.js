import React from 'react';
import styled from 'styled-components';
import Container from '../base/Container';
import SiteLogo from './SiteLogo';
import Navigation from './Navigation';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
`;

const Header = () => {
    return (
        <Container>
            <HeaderWrapper>
                <SiteLogo />
                <Navigation />
            </HeaderWrapper>
        </Container>
    );
};

export default Header;