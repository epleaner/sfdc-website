import {graphql} from 'gatsby';
import ContentfulContentSectionFragment from './ContentfulContentSectionFragment';

export const ContentfulPageFragment = graphql`
  fragment ContentfulPageFragment on ContentfulPage {
    title
    subTitle
    contentSections {
      ...ContentfulContentSectionFragment
    }
  }
`;
