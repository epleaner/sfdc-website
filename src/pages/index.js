import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CoronavirusUpdate from '../components/CoronavirusUpdate';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Donate from '../components/HomePage/Donate';
import EventsThisWeek from '../components/HomePage/EventsThisWeek';
import NewsletterPopup from '../components/HomePage/NewsletterPopup';
import MailChimpSignup from '../components/MailChimpSignup';
import MorningSit from '../components/MorningSit';

const useStyles = makeStyles((theme) => ({
  lotusImage: {
    maxWidth: '250px',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    color: 'black',
  },
  avatar: {
    width: 150,
    height: 150,
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
  bannerImageOrder: {
    [theme.breakpoints.down('md')]: {
      order: 0,
    },
    display: 'flex',
  },
  bannerImageContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  bannerText: {
    paddingRight: '30px',
    [theme.breakpoints.down('xs')]: {
      order: 1,
      paddingRight: '0px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      lotusImage: file(relativePath: { eq: "images/onelotus.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      pageData: contentfulPage(pageName: { eq: "Home" }) {
        ...ContentfulPageFragment
      }
      donateData: contentfulPage(pageName: { eq: "Donate" }) {
        ...ContentfulPageFragment
      }
    }
  `);

  const { lotusImage, pageData, donateData } = data;

  return (
    <>
      <SEO
        title='Home'
        description='The homepage of the San Francisco Dharma Collective.'
      />
      <Layout>
        <Grid container justify='center'>
          <Grid item container xs={12}>
            <Box mb={10}>
              <Hero {...{ pageData, classes, lotusImage }} />
            </Box>
            <Grid item container xs={12}>
              <Box mb={10}>
                <CoronavirusUpdate />
                <Box mb={8}>
                  <Grid
                    item
                    xs={12}
                    container
                    component='article'
                    justify='center'>
                    <MorningSit />
                  </Grid>
                </Box>
                <Donate />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={10}>
                {pageData.infoBanners?.map((infoBanner) => {
                  if (infoBanner.visible) {
                    return <Banner {...infoBanner} classes={classes} />;
                  }
                })}
              </Box>
            </Grid>
            <EventsThisWeek />
            <Grid item xs={12}>
              <Box mb={5}>
                <Typography align='center' variant='h3'>
                  May all beings be well and free of suffering
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
