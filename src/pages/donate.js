import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DonateButton from '../components/DonateButton';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Venmo from '../components/Venmo';
import ContentfulRichText from '../components/ContentfulRichText';

const Donate = () => {
  const { pageData } = useStaticQuery(graphql`
    {
      pageData: contentfulPage(pageName: { eq: "Donate" }) {
        ...ContentfulPageFragment
      }
    }
  `);

  return (
    <>
      <SEO
        title={pageData.title}
        description='Donate to the San Francisco Dharma Collective.'
      />
      <Layout>
        <Grid container>
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
                <i>{pageData.subTitle}</i>
              </Typography>
            </Box>
          </Grid>
          <Grid container item>
            <Grid item xs={12} container justify='center'>
              <Box mb={4}>
                <DonateButton inputText='Teacher, class, general note, et cetera...' />
              </Box>
            </Grid>
            <Grid item xs={12} container justify='center'>
              <Box mb={6}>
                <Venmo />
              </Box>
            </Grid>
            {pageData.contentSections.map(({ title, content }) => (
              <Grid key={title} item xs={12}>
                <Typography align='center' variant='body1' component='span'>
                  <ContentfulRichText json={content.json} />
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Donate;
