import React from 'react';
import { Link } from 'gatsby';
import { 
    ArticleWrapper,
    Image,
    Meta,
    Categories,
    Category, 
    Time,
    Title, 
    TitleLink,
    Content,
    ReadMore, 
} from './Article'; 

const Preview = ( { post } ) => {
    console.log( post );
    return (
        <ArticleWrapper>
            <Link to={ `/post/${ post.slug }` }>
                <Image src={ post.featured_media.source_url } alt="Article image" />
            </Link>

            <Meta>
                <Categories>
                    {
                        post.categories.map( ( category ) => (
                            <Category 
                                key={ category.id } 
                                to={ `/category/${ category.slug }` } 
                                dangerouslySetInnerHTML={ { __html: category.name } } 
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

            <Content dangerouslySetInnerHTML={ { __html: post.excerpt } } />

            <ReadMore
                as={ Link } 
                to={ `/post/${ post.slug }` }
                shadow={ true }
            >   
                Read more
            </ReadMore>
        </ArticleWrapper>
    );
};

export default Preview;