import React from 'react';
import { Link } from 'gatsby';
import { 
    ArticleWrapper,
    Image,
    Meta,
    Categories,
    Category, 
    Time,
    TitleLarge, 
    TitleLink,
    Content 
} from './Article'; 


const Post = ( { post } ) => {
    console.log( post )
    return (
        <ArticleWrapper>
            <TitleLink to={ `/post/${ post.slug }` }>
                <TitleLarge dangerouslySetInnerHTML={ { __html: post.title } } />
            </TitleLink>

            <Meta isPost={ true }>
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

            <Link to={ `/post/${ post.slug }` }>
                <Image src={ post.featured_media.source_url } alt="Article image" isPost={ true } />
            </Link>

            <Content dangerouslySetInnerHTML={ { __html: post.content } } />
        </ArticleWrapper>
    );
};

export default Post;