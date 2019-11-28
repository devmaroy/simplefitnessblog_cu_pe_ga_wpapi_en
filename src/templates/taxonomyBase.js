import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/base/Layout';
import Container from '../layout/base/Container';
//import ArticlePreview from '../components/post/ArticlePreview';
import Teaser from '../components/post/Teaser';


// Styles

const TaxonomiesWrapper = styled.div`
    margin-top: 8rem;
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
   margin-top: 8rem;
`;


const TaxonomyBase = ( props ) => {
    const { info, content } = props;
    
    return (
        <Layout>
            <Container>
                <TaxonomiesWrapper>
                    <TaxonomiesInfo>
                        Browsing { props.info.type }: 
                        <strong 
                            dangerouslySetInnerHTML={ { __html: ` "${ info.name }"` } } 
                        />
                    </TaxonomiesInfo>
                </TaxonomiesWrapper>
                <TaxonomiesContent>
                    {
                        content.map( ( { node } ) => (
                            <Teaser key={ node.id } post={ node } isTeaser={ true } />
                        ))
                    }
                </TaxonomiesContent>
            </Container>
        </Layout>
    );
};

export default TaxonomyBase;