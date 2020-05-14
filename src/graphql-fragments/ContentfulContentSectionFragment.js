import { graphql } from 'gatsby';
export const ContentfulContentSectionFragment = graphql`
  fragment ContentfulContentSectionFragment on ContentfulContentSection {
    title
    content {
      json
    }
    media {
      fluid(maxWidth: 500) {
        ...GatsbyContentfulFluid_withWebp
      }
      fixed(width: 500) {
        ...GatsbyContentfulFixed_withWebp
      }
      file {
        url
      }
    }
  }
`;
