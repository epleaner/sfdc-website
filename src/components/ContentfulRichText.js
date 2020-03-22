import React from 'react';
import RichTextToReact from 'rich-text-to-react';
import {INLINES} from '@contentful/rich-text-types';
import Link from '@material-ui/core/Link';

const ContentfulRichText = (props) => {
  const {json} = props;

  const renderingOptions = {
    renderMark: {},
    renderNode: {
      [INLINES.HYPERLINK]: (node, key, next, options) => (
        <Link
          key={key}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            'color': 'rgba(62,149,153,1)',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
          href={node.data.uri}
        >
          {node.content[0].value}
        </Link>
      ),
    },
  };

  return <RichTextToReact document={json} options={renderingOptions} />;
};

export default ContentfulRichText;
