import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import DonateButton from './DonateButton';
import Venmo from './Venmo';
import ContentfulRichText from './ContentfulRichText';

const useStyles = makeStyles((theme) => ({
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
  divider: {
    backgroundColor: 'rgba(62,149,153,1)',
  },
}));

const CoronavirusUpdate = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      contentData: contentfulContentSection(
        title: { eq: "Coronavirus Update" }
      ) {
        ...ContentfulContentSectionFragment
      }
    }
  `);

  const { contentData } = data;

  return (
    <>
      <Box mb={10}>
        <Typography variant='body1' component='aside'>
          <Grid item xs={12}>
            <Typography gutterBottom variant='body1' align='center'>
              All our classes are now hosted online.
            </Typography>
            <Typography gutterBottom variant='body1' align='center'>
              Most classes are on Zoom and use this link:{' '}
              <Link
                target='_blank'
                rel='noopener noreferrer'
                className={classes.anchor}
                href='http://bit.ly/sfdharma'>
                http://bit.ly/sfdharma
              </Link>{' '}
              (password: <b>108108</b>)
            </Typography>
            <Typography gutterBottom variant='body1' align='center'>
              You can also dial in from a phone by calling <b>301-715-8592</b>{' '}
              and using Meeting ID: <b>545 039 806</b>.
            </Typography>
          </Grid>
        </Typography>
      </Box>
    </>
  );
};

export default CoronavirusUpdate;
