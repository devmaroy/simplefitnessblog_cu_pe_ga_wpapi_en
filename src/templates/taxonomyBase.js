import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
import Preview from '../components/post/Preview';


// Styles

const TaxonomiesWrapper = styled.div`
   margin-top: 10rem;
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
     

    @media ( min-width: 830px ) {
        grid-template-columns: repeat( 2, minmax( 0, 1fr ) );
        grid-gap: 2rem;
    }

    @media ( min-width: 1180px ) {
        grid-template-columns: repeat( 3, minmax( 0, 1fr ) );
    }
`;


const TaxonomyBase = ( props ) => {
    const { info, content } = props;
    
    return (
        <Layout>
            <Container>
                <TaxonomiesWrapper>
                    <TaxonomiesInfo>
                        Browsing { props.info.type }
                        <strong dangerouslySetInnerHTML={ { __html: ` "${ info.name }"` } } />
                    </TaxonomiesInfo>

                    <TaxonomiesContent>
                        {
                            content.map( ( { node: post } ) => (
                                <Preview key={ post.id } post={ post } />
                            ))
                        }
                    </TaxonomiesContent>
                </TaxonomiesWrapper>
            </Container>
        </Layout>
    );
};

export default TaxonomyBase;