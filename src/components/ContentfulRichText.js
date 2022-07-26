import React from 'react';
import RichTextToReact from 'rich-text-to-react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ContentfulRichText = (props) => {
  const { json } = props;

  console.log(json);

  const renderingOptions = {
    renderMark: {},
    renderNode: {
      [INLINES.HYPERLINK]: (node, key) => (
        <Link
          key={key}
          target='_blank'
          rel='noopener noreferrer'
          style={{
            color: 'rgba(62,149,153,1)',
            '&:hover': {
              textDecoration: 'underline',
              cursor: 'pointer',
            },
          }}
          href={node.data.uri}>
          {node.content[0].value}
        </Link>
      ),
      [BLOCKS.HR]: () => <Box my={4} />,
      [BLOCKS.HEADING_1]: (node, key) => (
        <Grid key={key} item xs={12}>
          <Box mb={2}>
            <Typography variant='h1' component='h1'>
              {node.content[0].value}
            </Typography>
          </Box>
        </Grid>
      ),
      [BLOCKS.HEADING_2]: (node, key) => (
        <Grid key={key} item xs={12}>
          <Box mb={2}>
            <Typography variant='h2' component='h2'>
              {node.content[0].value}
            </Typography>
          </Box>
        </Grid>
      ),
      [BLOCKS.HEADING_3]: (node, key) => (
        <Grid key={key} item xs={12}>
          <Box mb={2}>
            <Typography variant='h3' component='h3'>
              {node.content[0].value}
            </Typography>
          </Box>
        </Grid>
      ),
      [BLOCKS.HEADING_4]: (node, key) => (
        <Grid key={key} item xs={12}>
          <Box mb={2}>
            <Typography variant='h4' component='h4'>
              {node.content[0].value}
            </Typography>
          </Box>
        </Grid>
      ),
      [BLOCKS.HEADING_5]: (node, key) => (
        <Grid key={key} item xs={12}>
          <Box mb={2}>
            <Typography variant='h5' component='h5'>
              {node.content[0].value}
            </Typography>
          </Box>
        </Grid>
      ),
      [BLOCKS.HEADING_6]: (node, key) => (
        <Grid key={key} item xs={12}>
          <Box mb={2}>
            <Typography variant='h6' component='h6'>
              {node.content[0].value}
            </Typography>
          </Box>
        </Grid>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, key) => {
        let { title, description, file } = node.data.target.fields;
        if (!file) return null;
        file = file['en-US'] ? file['en-US'] : file;

        const mimeType = file.contentType;
        const mimeGroup = mimeType.split('/')[0];
        let content;

        switch (mimeGroup) {
          case 'image':
            content = (
              <img
                width='100%'
                title={title ? title['en-US'] : null}
                alt={description ? description['en-US'] : null}
                src={file.url}
              />
            );
            break;
          case 'video':
            content = (
              <video controls='below' fit='contain'>
                <source key='video' src={file.url} type={mimeType} />
              </video>
            );
            break;
          case 'application': {
            content = (
              <Link
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: 'rgba(62,149,153,1)',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                href={file.url}>
                <Typography style={{ fontSize: '1.5rem' }}>
                  {file.fileName}
                </Typography>
              </Link>
            );
            break;
          }
          default:
            content = `Unrecognized format. mime-group:${mimeGroup}, mime-type: ${mimeType}`;
            break;
        }
        return <Box key={key}>{content}</Box>;
      },
    },
  };

  return <RichTextToReact document={json} options={renderingOptions} />;
};

export default ContentfulRichText;
