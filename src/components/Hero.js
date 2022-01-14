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
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Hero = ({ pageData, classes, lotusImage }) => {
  return (
    <>
      <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Box my={4}>
            <Img
              className={classes.lotusImage}
              fluid={lotusImage.childImageSharp.fluid}
              alt='Lotus'
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item container justify='center' xs={12}>
        <Box mb={4}>
          <Button color='primary' size='large' variant='outlined'>
            <GatsbyLink to='/upcoming-events' className={classes.link}>
              See upcoming events
            </GatsbyLink>
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Hero;
