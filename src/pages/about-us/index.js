import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import RichTextToReact from 'rich-text-to-react';
import {INLINES} from '@contentful/rich-text-types';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

import Layout from '../../components/Layout';
import LotusImagePath from '../../assets/images/lotus.png';
import SEO from '../../components/SEO';

const useStyles = makeStyles((theme) => ({
  lotusImage: {maxWidth: '500px', width: '100%', height: '100%'},
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
  section: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPageContent(filter: { pageName: { eq: "About Us" } }) {
        edges {
          node {
            title
            contentSections {
              title
              content {
                json
              }
            }
          }
        }
      }
    }
  `);

  const pageContent = data.allContentfulPageContent.edges[0].node;

  const renderingOptions = {
    renderMark: {},
    renderNode: {
      [INLINES.HYPERLINK]: (node, key, next, options) => (
        <Link
          key={key}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.anchor}
          href={node.data.uri}
        >
          {node.content[0].value}
        </Link>
      ),
    },
  };

  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="About Us"
        description="San Francisco Dharma Center About Page"
      />
      <Grid container>
        <Grid item container xs={12}>
          <Grid item container alignContent="center" xs={12} md={8}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h1">
                {pageContent.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify="center" xs={12} md={4}>
            <Grid item>
              <img
                className={classes.lotusImage}
                src={LotusImagePath}
                alt="Lotus"
              />
            </Grid>
          </Grid>
        </Grid>
        {pageContent.contentSections.map(({title, content}) => (
          <Grid key={title} item xs={12} container className={classes.section}>
            <Grid item xs={12}>
              <Box my={3}>
                <Typography variant="h3" component="h2">
                  {title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="span">
                <RichTextToReact
                  document={content.json}
                  options={renderingOptions}
                />
              </Typography>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.537979505336!2d-122.41610668477435!3d37.75398197976332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f589b10caed%3A0x75f9d155a81c5872!2sSF%20Dharma%20Collective!5e0!3m2!1sen!2suk!4v1582538375324!5m2!1sen!2suk"
            frameBorder="0"
            style={{border: 0, width: '100%', height: '400px'}}
            title="Google map of SFDC location"
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AboutUs;
