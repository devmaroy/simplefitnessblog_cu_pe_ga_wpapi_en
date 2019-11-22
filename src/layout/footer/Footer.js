import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import SiteLogo from '../header/SiteLogo';

const FooterWrapper = styled.footer`
    margin-top: 8rem;
    margin-bottom: 2rem;
`;

const FooterInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Copyright = styled.p`
    margin: 0;
    color: ${ props => props.theme.colors.lightGray };

    &::before {
        content: '\u00A9 ';
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterInfo>
                    <SiteLogo />
                    <Copyright>2019 All Rights Reserved.</Copyright>
                </FooterInfo>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;