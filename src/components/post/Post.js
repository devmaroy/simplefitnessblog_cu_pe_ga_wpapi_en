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
    TitleLarge,
    Content,
    Tags,
    Tag,
} from '../elements/Content'; 


// Styles

const Meta = styled.div`
    margin-top: 2.5rem;
    margin-bottom: 6rem;
    text-align: center;
`;


const Post = ( { post } ) => {
    return (
        <ContentWrapper>
            <TitleLink to={ `/post/${ post.slug }` }>
                <TitleLarge dangerouslySetInnerHTML={ { __html: post.title } } />
            </TitleLink>

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

            <Link to={ `/post/${ post.slug }` }>
                <FeaturedImage src={ post.featured_media.source_url } alt="Article image" />
            </Link>

            <Content dangerouslySetInnerHTML={ { __html: post.content } } />
            
            <Tags>
                {
                    post.tags.map( ( { id, slug, name } ) => (
                        <Tag
                            key={ id }
                            as={ Link } 
                            styled={ { sm: true } }
                            to={ `/tag/${ slug }` } 
                            dangerouslySetInnerHTML={ { __html: name } }
                        />
                    ))
                }
            </Tags>

            { /* Todo 
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
            */ }
        </ContentWrapper>
    );
};


export default Post;