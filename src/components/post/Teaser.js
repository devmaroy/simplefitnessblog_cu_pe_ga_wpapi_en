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
    Content 
} from './Article'; 
import { ButtonPrimary } from '../elements/Button';


const Teaser = ( { post } ) => {
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

            <ButtonPrimary as={ Link } to={ `/post/${ post.slug }`}>Read more</ButtonPrimary>
        </ArticleWrapper>
    );
};

export default Teaser;