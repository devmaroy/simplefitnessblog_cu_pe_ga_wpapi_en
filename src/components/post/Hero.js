import React from 'react';
import styled from 'styled-components';
import {
    Thumbnail,
    ThumbnailContent,
    Category,
    Tag,
    TitleLink,
    Title,
    TitleLarge,
    AuthorAvatar,
    AuthorName,
    DateIcon,
    Time,
} from '../elements/Content';
import ConditionalWrapper from '../base/ConditionalWrapper';
import Container from '../../layout/base/Container';



// Styles

const Date = styled.div`
    margin-top: 1rem;
    color: ${ props => props.theme.colors.light };
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    color: ${ props => props.theme.colors.light };
`;

const Meta = styled.div`
    color: ${ props => props.theme.colors.light };
`;

const Tags = styled.div`
    margin-top: 3rem;
    color: ${ props => props.theme.colors.light };

    span {
        margin-right: 1rem;
    }
`;


const Hero = ( { post, settings, styles } ) => {
    const { title, slug, categories, tags, author, date, plainDate, featured_media } = post;
    const image = featured_media.localFile.childImageSharp.fluid;

    return (
        <Thumbnail fluid={ image } styled={ styles.cover } className="pucka">
            <ConditionalWrapper
                condition={ settings.wrapContent }
                wrapper={ ( children ) => <Container>{ children }</Container> }
            >
                <ThumbnailContent styled={ styles.content }>
                    <div>
                        {
                            categories.map( ( { id, name, slug } ) => (
                                <Category
                                    key={ id }
                                    to={ `/category/${ slug }` }
                                    dangerouslySetInnerHTML={ { __html: name } }
                                />            
                            ))
                        }
                    </div>
            
                    <div>
                        <TitleLink to={ `/post/${ slug }` }>
                            {
                                settings.largeTitle ? (
                                    <TitleLarge>{ title }</TitleLarge>
                                ) : (
                                    <Title>{ title }</Title>
                                )
                            }
                        </TitleLink>
                    </div>

                    <Meta>
                        <Author>
                            <AuthorAvatar src={ author.avatar_urls.wordpress_96 } alt={ `Avatar for ${ author.name }` } />
                            by <AuthorName href={ author.url }>{ author.name }</AuthorName>
                        </Author>

                        <Date>
                            <DateIcon 
                                icon={ [ "far", "clock" ] }
                                fixedWidth 
                            />
                            <Time dateTime={ plainDate }>{ date }</Time>
                        </Date>

                        {
                            settings.showTags && (
                                <Tags>
                                    <span>Tagged in: </span>
                                    {
                                        tags.map(( { id, slug, name }) => (
                                            <Tag 
                                                key={ id } 
                                                to={ `/tag/${ slug }` }
                                            >
                                                { name }
                                            </Tag>
                                        ))
                                    }
                                </Tags>
                            )
                        }
                    </Meta>
                </ThumbnailContent>
            </ConditionalWrapper>
        </Thumbnail>
    );
};


Hero.defaultProps = {
    settings: {},
    styles: {}
}

export default Hero;