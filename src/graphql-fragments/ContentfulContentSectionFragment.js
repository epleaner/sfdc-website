import {graphql} from 'gatsby';
export const ContentfulContentSectionFragment = graphql`
  fragment ContentfulContentSectionFragment on ContentfulContentSection {
    title
    content {
      json
    }
  }
`;
