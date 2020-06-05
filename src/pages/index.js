import React, { useState } from 'react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CoronavirusUpdate from '../components/CoronavirusUpdate';
import ContentfulRichText from '../components/ContentfulRichText';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const useStyles = makeStyles((theme) => ({
  lotusImage: {
    maxWidth: '500px',
    width: '100%',
    height: '100%',
    margin: '0 auto',
  },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
  divider: {
    backgroundColor: 'rgba(254,172,102,1)',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  themeBorder: {
    border: '1px solid rgba(62,149,153,1)',
    borderRadius: '5px',
  },
}));

const Home = () => {
  const classes = useStyles();

  const [showBanner, setShowBanner] = useState(true);

  const data = useStaticQuery(graphql`
    {
      lotusImage: file(relativePath: { eq: "images/lotus.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 500
            traceSVG: { background: "#fafafa", color: "rgba(199,241,243,1)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      pageData: contentfulPage(pageName: { eq: "Home" }) {
        ...ContentfulPageFragment
      }
    }
  `);

  const { lotusImage, pageData } = data;

  return (
    <Layout>
      <SEO
        title='Home'
        description='The homepage of the San Francisco Dharma Collective.'
      />
      <Grid container justify='center'>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              {showBanner && pageData.popUp && (
                <Box p={2} className={classes.themeBorder}>
                  <Grid item container xs={12}>
                    <Grid item xs={11}>
                      <ContentfulRichText json={pageData.popUp.content.json} />
                    </Grid>
                    <Grid item xs={1} container justify='flex-end'>
                      <Box>
                        <IconButton
                          aria-label='close-banner'
                          onClick={() => setShowBanner(false)}>
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )}
              <Box mb={5} mt={2}>
                <Typography align='center' variant='h1' component='h1'>
                  {pageData.title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center' variant='h2' component='h2'>
                {pageData.subTitle}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify='center' xs={12}>
            <Grid item xs={12}>
              <Box my={6}>
                <Img
                  className={classes.lotusImage}
                  fluid={lotusImage.childImageSharp.fluid}
                  alt='Lotus'
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item container justify='center' xs={12}>
            <Button color='primary' size='large' variant='outlined'>
              <GatsbyLink to='/upcoming-events' className={classes.link}>
                See upcoming events
              </GatsbyLink>
            </Button>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Box my={10}>
            <CoronavirusUpdate />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={5}>
            <Typography align='center' variant='h3'>
              May all beings be well and free of suffering
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
