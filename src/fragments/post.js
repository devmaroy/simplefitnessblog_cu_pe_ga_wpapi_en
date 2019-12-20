import { graphql } from 'gatsby';


export const query = graphql`
    fragment PostData on wordpress__POST {
        id
        title
        slug
        content
        plainDate: date
        date( formatString: "MMMM DD, YYYY" )
        author {
            name
            url
            description
            avatar_urls {
                wordpress_96
            }
            social_links {
                title
                url
            }
        }
        categories {
            id
            name
            slug
        }
        tags {
            id
            name
            slug
        }
        featured_media {
            localFile {
                childImageSharp {
                    fluid( maxWidth: 2560, quality: 100 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;