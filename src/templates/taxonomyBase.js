import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Preview from '../components/post/Preview';
import Pagination from '../components/base/Pagination';


// Styles

const TaxonomiesWrapper = styled.div`
   margin-top: 4rem;

   @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        margin-top: 8rem;
    }
`;


const TaxonomiesInfo = styled.p`
    font-family: ${ props => props.theme.fonts.secondary };
    font-size: 1.8rem;
    color: ${ props => props.theme.colors.lightGray };

    strong {
        font-weight: ${ props => props.theme.fonts.weights.medium };
    }
`;


const TaxonomiesContent = styled.div`
    display: grid;
    grid-gap: 4rem;
    margin-top: 4rem;
     

    @media ( min-width: ${ props => props.theme.breakpoints.medium } ) {
        grid-template-columns: repeat( 2, minmax( 0, 1fr ) );
        grid-gap: 2rem;
    }

    @media ( min-width: ${ props => props.theme.breakpoints.large } ) {
        grid-template-columns: repeat( 3, minmax( 0, 1fr ) );
    }
`;


const TaxonomyBase = ( { info, content, context } ) => {
    const { name, slug, type } = info;
    const { currentPage, numPages } = context;

    return (
        <Layout>
            <Container>
                <TaxonomiesWrapper>
                    <TaxonomiesInfo>
                        Browsing { type }
                        <strong dangerouslySetInnerHTML={ { __html: ` "${ name }"` } } />
                    </TaxonomiesInfo>

                    <TaxonomiesContent>
                        {
                            content.map(( { node: post } ) => (
                                <Preview key={ post.id } post={ post } />
                            ))
                        }
                    </TaxonomiesContent>

                    <Pagination 
                        numberOfPages={ numPages } 
                        currentPage={ currentPage } 
                        prefix={ `${ type }/${ slug }` }
                    />
                </TaxonomiesWrapper>
            </Container>
        </Layout>
    );
};

export default TaxonomyBase;