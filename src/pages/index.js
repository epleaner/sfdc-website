import React, { useState } from 'react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ContentfulRichText from '../components/ContentfulRichText';
import ContentfulPageFragment from '../graphql-fragments/ContentfulPageFragment';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import CoronavirusUpdate from '../components/CoronavirusUpdate';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const useStyles = makeStyles((theme) => ({
  lotusImage: {
    maxWidth: '500px',
    width: '100%',
    height: '100%',
    margin: '0 auto',
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
    [theme.breakpoints.down('xs')]: {
      order: 0,
      justifyContent: 'start',
    },
    display: 'flex',
    justifyContent: 'end',
  },
  bannerImageContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  bannerTextOrder: {
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },
}));

const Home = () => {
  const [showBanner, setShowBanner] = useState(true);
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      lotusImage: file(relativePath: { eq: "images/onelotus.png" }) {
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
    <>
      <SEO
        title='Home'
        description='The homepage of the San Francisco Dharma Collective.'
      />
      <Layout>
        <Grid container justify='center'>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                {pageData.infoBanners?.map((infoBanner) => {
                  if (infoBanner.visible) {
                    return (
                      <Box
                        key={infoBanner.title}
                        p={2}
                        marginBottom={4}
                        className={classes.themeBorder}>
                        <Grid item container xs={12}>
                          <Grid
                            item
                            xs={12}
                            sm={8}
                            className={classes.bannerTextOrder}>
                            <ContentfulRichText
                              json={infoBanner.content.json}
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            className={classes.bannerImageOrder}>
                            {infoBanner.media &&
                              infoBanner.media.map((img) => (
                                <div
                                  className={classes.bannerImageContainer}
                                  key={img.id}>
                                  <Avatar
                                    className={classes.avatar}
                                    key={img.id}
                                    src={img.fixed.src}
                                  />
                                </div>
                              ))}
                          </Grid>
                        </Grid>
                      </Box>
                    );
                  }
                })}
              </Grid>
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
            <Grid item container justify='center' xs={12}>
              <Box my={8}>
                <Button color='primary' size='large' variant='outlined'>
                  <GatsbyLink to='/upcoming-events' className={classes.link}>
                    See upcoming events
                  </GatsbyLink>
                </Button>
              </Box>
            </Grid>
            <Grid item container justify='center' xs={12}>
              <Grid item xs={12}>
                <Box>
                  <Img
                    className={classes.lotusImage}
                    fluid={lotusImage.childImageSharp.fluid}
                    alt='Lotus'
                  />
                </Box>
              </Grid>
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
    </>
  );
};

export default Home;
