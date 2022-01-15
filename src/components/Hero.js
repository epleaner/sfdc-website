import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ContentfulRichText from './ContentfulRichText';

const Hero = ({ pageData, classes, lotusImage }) => {
  const data = useStaticQuery(graphql`
    {
      missionData: contentfulContentSection(title: { eq: "Mission" }) {
        id
        content {
          json
        }
      }
    }
  `);

  const { missionData } = data;

  return (
    <Grid item container>
      <Grid item xs={12}>
        <Box mb={5} mt={2}>
          <Typography align='center' variant='h1' component='h1'>
            <span className='xs:text-5xl  sm:text-inherit'>
              {pageData.title}
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align='center' variant='h2' component='h2'>
          {pageData.subTitle}
        </Typography>
      </Grid>

      <Grid item container justify='center' xs={12}>
        <Box className='my-10 w-24 sm:w-full'>
          <Img
            className={classes.lotusImage}
            fluid={lotusImage.childImageSharp.fluid}
            alt='Lotus'
          />
        </Box>
      </Grid>
      <Grid item container justify='center' xs={12}>
        <Box mb={10}>
          <Button color='primary' size='large' variant='outlined'>
            <GatsbyLink to='/upcoming-events' className={classes.link}>
              See upcoming events
            </GatsbyLink>
          </Button>
        </Box>
      </Grid>
      <Grid item container justify='center' xs={12}>
        <Box>
          <Typography variant='h3' component='span' align='center'>
            <ContentfulRichText json={missionData.content.json} />
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
