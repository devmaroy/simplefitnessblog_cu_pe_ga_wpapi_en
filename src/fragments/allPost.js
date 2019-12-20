import { graphql } from 'gatsby';


export const query = graphql`
    fragment AllPostData on wordpress__POST {
        id
        title
        slug
        plainDate: date
        date( formatString: "MMMM DD, YYYY" )
        author {
            name
            url
            avatar_urls {
                wordpress_96
            }
        }
        categories {
            id
            name
            slug
        }
        featured_media {
            localFile {
                childImageSharp {
                    fluid( maxWidth: 1200, quality: 100 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;