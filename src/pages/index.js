import {graphql, useStaticQuery} from 'gatsby';

import Box from '@material-ui/core/Box';
import CoronavirusUpdate from '../components/CoronavirusUpdate';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Link from '@material-ui/core/Link';
import LotusImagePath from '../assets/images/lotus.png';
import React from 'react';
import SEO from '../components/SEO';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

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
}));

const Home = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/lotus.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 500
            traceSVG: { background: "#fafafa", color: "rgba(199,241,243,1)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  console.log(data);
  return (
    <Layout>
      <SEO
        title="Home"
        description="Home page of San Francisco Dharma Collective, a sangha-run meditation collective in San Francisco's Mission district"
      />
      <Grid container justify="center">
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Box mb={5} mt={2}>
              <Typography align="center" variant="h1" component="h1">
                Meditate with us.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h2" component="h2">
              The SF Dharma Collective is a community-led sangha.
            </Typography>
          </Grid>
          <Grid item container justify="center" xs={12}>
            <Grid item xs={12}>
              <Box mt={10}>
                <Img
                  className={classes.lotusImage}
                  fluid={data.file.childImageSharp.fluid}
                  alt="Lotus"
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
            <Typography align="center" variant="h3">
              May all beings be well and free of suffering
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
