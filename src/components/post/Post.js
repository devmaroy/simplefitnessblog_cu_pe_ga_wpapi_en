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
    Content,
    Tags,
    Tag,
    SocialShare,
    SocialShareHeading,
    SocialShareList,
    SocialShareListItem,
    SocialShareLink,
} from './Article'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Post = ( { post } ) => {
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

            <Tags>
                {
                    post.tags.map( ( tag ) => (
                        <Tag
                            key={ tag.id }
                            as={ Link } 
                            styled={ { sm: true } }
                            to={ `/tag/${ tag.slug }` } 
                            dangerouslySetInnerHTML={ { __html: tag.name } }
                        />
                    ))
                }
            </Tags>

            { /* Todo */ }
            <SocialShare>
                <SocialShareHeading>Share this article</SocialShareHeading>
                <SocialShareList>
                    <SocialShareListItem>
                        <SocialShareLink to="/">
                            <FontAwesomeIcon 
                                icon={["fab", "twitter"]}
                                fixedWidth 
                            />
                        </SocialShareLink>
                    </SocialShareListItem>
                    <SocialShareListItem>
                        <SocialShareLink to="/">
                            <FontAwesomeIcon 
                                icon={["fab", "facebook-f"]}
                                fixedWidth 
                            />
                        </SocialShareLink>
                    </SocialShareListItem>
                    <SocialShareListItem>
                        <SocialShareLink to="/">
                            <FontAwesomeIcon 
                                icon={["fab", "instagram"]}
                                fixedWidth 
                            />
                        </SocialShareLink>
                    </SocialShareListItem>
                </SocialShareList> 
            </SocialShare>
        </ArticleWrapper>
    );
};


export default Post;