import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ContentfulRichText from '../../components/ContentfulRichText';

const useStyles = makeStyles({
  list: { listStyle: 'none', padding: 0 },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
});

const Leadership = () => {
  const data = useStaticQuery(graphql`
    {
      pageData: contentfulPage(pageName: { eq: "Leadership" }) {
        ...ContentfulPageFragment
      }
    }
  `);

  const { pageData } = data;

  const blurbSection = pageData.contentSections.filter(
    ({ title }) => title === 'Blurb'
  )[0];

  const boardMembersSection = pageData.contentSections.filter(
    ({ title }) => title === 'SF Dharma Collective Board of Directors'
  )[0];

  const boardMembersLists = boardMembersSection.content.json.content.filter(
    ({ nodeType }) => nodeType === 'unordered-list'
  );

  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title='Leadership'
        description='The San Francisco Dharma Collective is a sangha-led dharma community. Meet our leadership.'
      />
      <Grid container>
        <Grid item container>
          <Grid item xs={12}>
            <Box mb={3}>
              <Typography align='center' variant='h2' component='h1'>
                {pageData.title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={10}>
              <Typography align='center' variant='h5' component='h2'>
                {pageData.subTitle}
              </Typography>
            </Box>
          </Grid>
          <Grid container item>
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant='body1' component='section'>
                  <ContentfulRichText json={blurbSection.content.json} />
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {boardMembersSection && (
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <Box mt={10} mb={4}>
                  <Typography align='center' variant='h3' component='h3'>
                    {boardMembersSection.title}
                  </Typography>
                </Box>
              </Grid>
              {boardMembersLists.map((ulRichText) => (
                <Grid item container justify='center' xs={12} sm={4}>
                  <Typography
                    className={classes.list}
                    align='center'
                    variant='body1'
                  >
                    <ContentfulRichText json={ulRichText} />
                  </Typography>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Leadership;
