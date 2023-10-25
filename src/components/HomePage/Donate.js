import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import DonateButton from '../../components/DonateButton';
import Venmo from '../../components/Venmo';
import ContentfulRichText from '../../components/ContentfulRichText';

const useStyles = makeStyles((theme) => ({
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
    fontWeight: '500',
  },
}));

const Donate = () => {
  const { pageData } = useStaticQuery(graphql`
    {
      pageData: contentfulPage(pageName: { eq: "Donate" }) {
        ...ContentfulPageFragment
      }
    }
  `);

  const classes = useStyles();

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
        <Grid item xs={12}>
          <Box mb={4}>
            <Typography align='center' variant='h5' component='h2'>
              <i>{pageData.subTitle}</i>
            </Typography>
          </Box>
        </Grid>
        <Grid container item>
          <Grid item xs={12} container justify='center'>
            <DonateButton inputText='Teacher, class, general note, et cetera...' />
          </Grid>
          <Grid item xs={12} container justify='center'>
            <Box mb={2}></Box>
          </Grid>
          <Grid item xs={12} container justify='center'>
            <Box mb={8}>
              <Venmo />
            </Box>
          </Grid>
          <Box mb={4}>
            <Typography align='center' variant='body1' component='span'>
              <ContentfulRichText json={pageData.footer.json} />
            </Typography>
          </Box>
          <Box>
            {pageData.contentSections.map(({ title, content }) => (
              <Grid key={title} item xs={12}>
                <Box mb={4}>
                  <Typography align='center' variant='body1' component='span'>
                    <ContentfulRichText json={content.json} />
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Donate;
