import React from 'react';
import styled from 'styled-components';
import Container from '../base/Container';
import SiteLogo from './SiteLogo';
import Navigation from './navigation/Navigation';


// Styles

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
`;

const Header = () => {
    return (
        <Container>
            <HeaderWrapper>
                <SiteLogo width={ '20rem' } />    
                <Navigation />
            </HeaderWrapper>
        </Container>
    );
};

export default Header;