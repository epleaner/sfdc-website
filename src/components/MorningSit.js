import React, {useEffect, useState} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  centerAligned: {alignSelf: 'center'},
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
}));

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/lotus.png" }) {
        childImageSharp {
          fixed(width: 175, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={3} className={classes.centerAligned}>
        <Box mb={3}>
          <Typography variant="h3" align="center" component="h1">
            Morning sits
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} container>
        <Grid item xs={12} container alignContent="center" justify="center">
          <Box mb={1}>
            <Typography variant="h4" align="center" component="h2">
              Every day
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container alignContent="center" justify="center">
          <Box>
            <Typography variant="h6" align="center" component="h3">
              7:30 - 8:15am
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container alignContent="center" justify="center">
          <Box my={3} mx={2}>
            <Typography variant="body1" align="center" component="p">
              Join us online:{' '}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className={classes.anchor}
                href="//bit.ly/sfdharma"
              >
                bit.ly/sfdharma
              </Link>{' '}
              (password: <b>108108</b>)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container alignContent="center" justify="center">
          <Box mb={3} mx={2}>
            <Typography variant="body2" align="center" component="p">
              Arriving late and leaving early is okay for morning sits!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3} container>
        <Grid item xs={12} container justify="center">
          <Box mt={3}>
            <Img fixed={data.file.childImageSharp.fixed} alt="Lotus" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={2}>
            <Typography variant="caption" align="center" component="aside">
              Morning sits are peer-led.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box mt={6}>
          <Divider />
        </Box>
      </Grid>
    </>
  );
};
