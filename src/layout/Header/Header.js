import React from 'react';
import styled from 'styled-components';
import Container from '../base/Container';
import SiteLogo from './SiteLogo';
import Navigation from './navigation/Navigation';


// Styles

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
`;


const Header = () => {
    return (
        <header>
            <Container>
                <HeaderContent>
                    <SiteLogo width={ '20rem' } />
                    <Navigation />    
                </HeaderContent>
            </Container>
        </header>
    )
}


export default Header;