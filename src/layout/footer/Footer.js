import React from 'react';
import styled from 'styled-components';
import Container from '../base/Container';
import SiteLogo from '../header/SiteLogo';
import { darken } from 'polished';


// Styles

const FooterWrapper = styled.footer`
    margin-top: 8rem;
    margin-bottom: 2rem;
`;


const FooterInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin: 0;
        color: ${ props => props.theme.colors.lightGray };    
    }
`;


const Copyright = styled.p`
    &::before {
        content: '\u00A9 ';
    }
`;


const AuthorLink = styled.a`
    text-decoration: none;
    font-weight: ${ props => props.theme.fonts.weights.bold };
    color: ${ props => props.theme.colors.primary };

    transition: ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        color: ${ props => darken( 0.15, props.theme.colors.primary ) };
    }
`;


const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterInfo>
                    <SiteLogo />
                    <Copyright>{ new Date().getFullYear() } All Rights Reserved.</Copyright>
                    <p>Created by <AuthorLink href="https://marekmatejovic.cz/">Marek Matejovic</AuthorLink></p>
                </FooterInfo>
            </Container>
        </FooterWrapper>
    );
};


export default Footer;