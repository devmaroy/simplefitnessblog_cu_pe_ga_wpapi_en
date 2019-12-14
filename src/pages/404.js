import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import { ButtonPrimary } from '../components/elements/Button';


// Styles

const ErrorContent = styled.div`
    margin: 8rem 0;
    font-size: 1.6rem;
    color: ${ props => props.theme.colors.lightGray };

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        margin: 12rem 0;
        font-size: 1.8rem;

        p {
            max-width: 90rem;
        }
    }
`;


const ErrorHeading = styled.h1`
    display: inline-block;
    font-family: ${ props => props.theme.fonts.secondary };
    font-weight: ${ props => props.theme.fonts.weights.bold };
    font-size: 6rem;
    margin: 0;
    color: ${ props => props.theme.colors.offGray };

    position: relative;

    @media ( min-width: ${ props => props.theme.breakpoints.medium }) {
        font-size: 8rem;
    }

    &::after {
        content: '';
        display: block;
        width: 50%;
        height: .8rem;
        background: ${ props => props.theme.colors.primary };
        position: absolute;
        bottom: 1rem;   

        @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
            height: 1rem;
        }
    }
`;


const ErrorSubHeading = styled.h2`
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: 3rem;
    margin: 6rem 0 3rem 0;
    color: ${ props => props.theme.colors.primary };

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        font-size: 4rem;
        margin: 8rem 0 4rem 0;
    }
`;


const HomeLink = styled( ButtonPrimary )`
    margin: 3rem 0 0 0;

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        margin: 4rem 0 0 0;
    }
`;



const NotFoundPage = () => {
    return (
        <ThemeProvider theme={ theme }>
            <Layout>
                <ErrorContent>
                    <Container>
                        <ErrorHeading>404</ErrorHeading>
                        <ErrorSubHeading>We're sorry :( There's something wrong</ErrorSubHeading>

                        <p>The page you are looking for doesn't exists. Maybe you have a typo or something else went wrong. Don't worry if you feel a little bit lost! You can always go back to our homepage and try again.</p>

                        <HomeLink to="/blog" as={ Link }>Go home</HomeLink>
                    </Container>
                </ErrorContent>
            </Layout>
        </ThemeProvider>
    );
};

export default NotFoundPage;
