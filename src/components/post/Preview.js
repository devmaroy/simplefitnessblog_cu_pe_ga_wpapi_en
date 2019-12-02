import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { 
     ContentWrapper,
     FeaturedImage,
     Categories,
     Category,
     Time,
     TitleLink,
     Title,
     Content,
     ReadMore,
} from '../elements/Content'; 


// Styles

const Meta = styled.div`
    margin-top: 2rem;
`;


const Preview = ( { post } ) => {
    return (
        <ContentWrapper>
            <Link to={ `/post/${ post.slug }` }>
                <FeaturedImage src={ post.featured_media.source_url } alt="Article image" />
            </Link>

            <Meta>
                <Categories>
                    {
                        post.categories.map( ( { id, slug, name } ) => (
                            <Category
                                key={ id }
                                to={ `/category/${ slug }` }
                                dangerouslySetInnerHTML={ { __html: name } }
                            />
                        ))
                    }
                </Categories>

                <Time dateTime={ post.plainDate }>
                    { post.date }
                </Time>
            </Meta>

            <TitleLink to={ `/post/${ post.slug }` }>
                <Title dangerouslySetInnerHTML={ { __html: post.title } } />
            </TitleLink>

            <Content dangerouslySetInnerHTML={ { __html: post.excerpt } } style={ { margin: 0 } } />

            <ReadMore as={ Link } to={ `/post/${ post.slug }` }>
                Read more
            </ReadMore>
        </ContentWrapper>
    );
};


export default Preview;