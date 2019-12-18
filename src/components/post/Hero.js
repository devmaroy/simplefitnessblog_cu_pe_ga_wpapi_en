import React from 'react';
import PropTypes from 'prop-types';
import { allPostPropTypes } from '../../propTypeValues';
import ConditionalWrapper from '../base/ConditionalWrapper';
import Container from '../../layout/base/Container';
import {
    Thumbnail,
    ThumbnailContent,
    TitleLink,
    TitleLarge,
    Title,
    Meta,
    Category,
    Tags,
    Tag,
    Author,
    AuthorAvatar,
    AuthorName,
    Date,
    DateIcon,
    Time,
} from '../elements/Hero';


const Hero = ( { post, settings, styles } ) => {
    const { title, slug, categories, tags, author, date, plainDate, featured_media } = post;
    const image = featured_media.localFile.childImageSharp.fluid;

    return (
        <Thumbnail fluid={ image } styled={ styles.cover }>
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

                    <TitleLink to={ `/post/${ slug }` }>
                        {
                            settings.largeTitle ? (
                                <TitleLarge>{ title }</TitleLarge>
                            ) : (
                                <Title>{ title }</Title>
                            )
                        }
                    </TitleLink>

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
                            settings.showTags && tags && (
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
    styles: {},
}


// Proptypes
Hero.propTypes = {
    post: PropTypes.shape({
        ...allPostPropTypes
    }).isRequired,
};


export default Hero;