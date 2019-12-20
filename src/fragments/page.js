import { graphql } from 'gatsby';


export const query = graphql`
    fragment PageData on wordpress__PAGE {
        id
        title
        slug
        content
        excerpt
        featured_media {
            localFile {
                childImageSharp {
                    fluid( maxWidth: 1200, maxHeight: 700, quality: 100 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;