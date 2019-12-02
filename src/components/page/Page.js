import React from 'react';
import {
    TitleLink,
    TitleLarge,
    Content,
    ContentWrapper,
} from '../elements/Content';


// Styles

const Page = ( { page } ) => {
    return (
        <ContentWrapper>
            <TitleLink to={ `/${ page.slug }` }>
                <TitleLarge dangerouslySetInnerHTML={ { __html: page.title } } />
            </TitleLink>
            <Content dangerouslySetInnerHTML={{ __html: page.content } } />
        </ContentWrapper>
    );
};


export default Page;