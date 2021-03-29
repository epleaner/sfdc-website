import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../components/Layout';
import LotusImagePath from '../../assets/images/onelotus.png';
import SEO from '../../components/SEO';
import ContentfulRichText from '../../components/ContentfulRichText';

const useStyles = makeStyles((theme) => ({
  lotusImage: { maxWidth: '500px', width: '100%', height: '100%' },
  section: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    {
      pageData: contentfulPage(pageName: { eq: "About Us" }) {
        ...ContentfulPageFragment
      }
    }
  `);

  const { pageData } = data;

  const classes = useStyles();

  return (
    <>
      <SEO
        title={pageData.title}
        description='About the San Francisco Dharma Center.'
      />
      <Layout>
        <Grid container>
          <Grid item container xs={12}>
            <Grid item container alignContent='center' xs={12} md={8}>
              <Grid item xs={12}>
                <Typography variant='h2' component='h1'>
                  {pageData.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justify='center' xs={12} md={4}>
              <Grid item>
                <img
                  className={classes.lotusImage}
                  src={LotusImagePath}
                  alt='Lotus'
                />
              </Grid>
            </Grid>
          </Grid>
          {pageData.contentSections.map(({ title, content }) => (
            <Grid
              key={title}
              item
              xs={12}
              container
              className={classes.section}>
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
    </>
  );
};

export default AboutUs;
