import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Layout from '../Layout';
import SEO from '../SEO';
import CoronavirusUpdate from '../CoronavirusUpdate';
import MonthList from '../MonthList';
import MorningSit from '../MorningSit';
import RecurringEventsList from '../RecurringEventsList';
import { parseEvents } from '../../utils/eventParser';

const useStyles = makeStyles((theme) => ({
  stickiedEvent: {
    margin: `${theme.spacing(6)}px 0`,
  },
  centerAligned: { alignSelf: 'center' },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
}));

const UpcomingEvents = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [eventData, setEventData] = useState({});

  const classes = useStyles();

  useEffect(() => {
    fetch('/.netlify/functions/google-calendar?singleEvents=true')
      .then((response) => response.json())
      .then((responseJson) => responseJson.data.items)
      .then(parseEvents)
      .then(setEventData)
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const { singleEventsByMonth } = eventData;

  let statusHeaderText = '';
  if (error) {
    statusHeaderText =
      'There was an error fetching our events, please try again 😑';
  } else if (isLoading) statusHeaderText = 'Loading upcoming events...';
  else if (!singleEventsByMonth || singleEventsByMonth.length === 0) {
    statusHeaderText = 'No events found';
  }

  return (
    <>
      <SEO
        title='Upcoming & Recurring Events'
        description='San Francisco Dharma Collective Upcoming & Recurring Events Page'
      />
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant={'h2'} align='center' component='h1'>
                Events Coming Up at SFDC
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box mt={6}>
                <Typography variant={'h6'} align='center' component='h2'>
                  Event times have been automatically converted to local
                  timezone
                </Typography>
                <Box my={6}>
                  <Divider />
                </Box>
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
                  You can also dial in from a phone by calling{' '}
                  <b>301-715-8592</b> and using Meeting ID: <b>545 039 806</b>.
                </Typography>
                <Box mt={6}>
                  <Divider />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              container
              component='article'
              justify='center'
              className={classes.stickiedEvent}>
              <MorningSit />
            </Grid>
            {statusHeaderText !== '' && (
              <Grid item xs={12}>
                <Box mt={4} mb={3}>
                  <Typography variant={'h3'} align='center' component='h2'>
                    {statusHeaderText}
                  </Typography>
                </Box>
              </Grid>
            )}
            <Grid item xs={12}>
              <MonthList eventData={singleEventsByMonth} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UpcomingEvents;
