import PropTypes from 'prop-types';


// Page
export const pagePropTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};


// Single Post
export const singlePostPropTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        avatar_urls: PropTypes.shape({
            wordpress_96: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}


// All Posts
export const allPostPropTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    tags: PropTypes.array,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        avatar_urls: PropTypes.shape({
            wordpress_96: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
    plainDate: PropTypes.string.isRequired,
    featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
}


// Taxonomy
export const taxonomyPropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}


// Context
export const contextPropTypes = {
    id: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    skip: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
}