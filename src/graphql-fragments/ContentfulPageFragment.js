import { graphql } from 'gatsby';

export const ContentfulPageFragment = graphql`
  fragment ContentfulPageFragment on ContentfulPage {
    title
    subTitle
    contentSections {
      ...ContentfulContentSectionFragment
    }
    infoBanners {
      visible
      title
      content {
        json
      }
      media {
        fixed(width: 150) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  }
`;
