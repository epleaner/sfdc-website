import { graphql } from 'gatsby';

export const ContentfulPageFragment = graphql`
  fragment ContentfulPageFragment on ContentfulPage {
    title
    subTitle
    contentSections {
      ...ContentfulContentSectionFragment
    }
  }
`;
