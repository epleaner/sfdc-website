import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
          <Box my={8}>
            <Img
              className={classes.lotusImage}
              fluid={lotusImage.childImageSharp.fluid}
              alt='Lotus'
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item container justify='center' xs={12}>
        <Box>
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
