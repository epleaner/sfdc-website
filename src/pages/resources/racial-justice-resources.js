import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ContentfulRichText from '../../components/ContentfulRichText';

const useStyles = makeStyles((theme) => ({
  section: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

export default () => {
  const data = useStaticQuery(graphql`
    {
      pageData: contentfulPage(pageName: { eq: "Racial Justice Resources" }) {
        ...ContentfulPageFragment
      }
    }
  `);

  const { pageData } = data;
  const classes = useStyles();

  return (
    <Layout>
      <SEO title={pageData.title} description={pageData.subTitle} />
      <Grid container>
        <Grid item container xs={12}>
          <Grid item container alignContent='center' xs={12}>
            <Grid item xs={12}>
              <Typography variant='h2' component='h1'>
                {pageData.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container alignContent='center' xs={12}>
            <Grid item xs={12}>
              <Box mt={2}>
                <Typography variant='h4' component='h2'>
                  {pageData.subTitle}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {pageData.contentSections.map(({ title, content }) => (
          <Grid key={title} item xs={12} container className={classes.section}>
            <Grid item xs={12}>
              <Box my={3}>
                <Typography variant='h3' component='h2'>
                  {title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1' component='span'>
                <ContentfulRichText json={content.json} />
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};
