import React from 'react';
import RichTextToReact from 'rich-text-to-react';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const ContentfulRichText = (props) => {
  const {json} = props;

  const renderingOptions = {
    renderMark: {},
    renderNode: {
      [INLINES.HYPERLINK]: (node, key) => (
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
