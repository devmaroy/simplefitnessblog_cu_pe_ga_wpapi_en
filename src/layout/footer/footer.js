import React from 'react';
import styled from 'styled-components';
import Container from '../base/Container';
import SiteLogo from '../header/SiteLogo';
import { darken } from 'polished';


// Styles

const FooterWrapper = styled.footer`
    margin: 8rem 0 4rem 0;
`;


const FooterInfo = styled.div`
    text-align: center;
    color: ${ props => props.theme.colors.lightGray };
    line-height: 2;

    @media ( min-width: 450px ) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        text-align: left;
    }

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;


const Copyright = styled.p`
    margin: 0 1rem 0 0;

    &::before {
        content: '\u00A9 ';
    }
`;


const AuthorInfo = styled.p`
    margin: 0;
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
                    <AuthorInfo>Created by <AuthorLink href="https://marekmatejovic.com/">devmaroy</AuthorLink></AuthorInfo>
                </FooterInfo>
            </Container>
        </FooterWrapper>
    );
};


export default Footer;
