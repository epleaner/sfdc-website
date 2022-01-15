import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DonateButton from '../../components/DonateButton';
import Venmo from '../../components/Venmo';
import ContentfulRichText from '../../components/ContentfulRichText';

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
      <Grid container>
        <Grid item xs={12}>
          <Box mb={4}>
            <Typography align='center' variant='h2' component='h1'>
              {pageData.title}
            </Typography>
          </Box>
        </Grid>
        <Box mb={4}>
          {pageData.contentSections.map(({ title, content }) => (
            <Grid key={title} item xs={12}>
              <Typography align='center' variant='body1' component='span'>
                <ContentfulRichText json={content.json} />
              </Typography>
            </Grid>
          ))}
        </Box>
        <Grid container item>
          <Grid item xs={12} container justify='center'>
            <Box mb={4}>
              <DonateButton />
            </Box>
          </Grid>
          <Grid item xs={12} container justify='center'>
            <Box mb={6}>
              <Venmo />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' variant='h5' component='h2'>
            <i>{pageData.subTitle}</i>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Donate;
