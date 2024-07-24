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
import SittingInPlace from '../SittingInPlace';

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
    statusHeaderText = (
      <>
        There was an error fetching our events, please check{' '}
        <a
          className={classes.anchor}
          href='https://calendar.google.com/calendar/u/0/embed?src=6lmk34aeh3mpas0kop9ve8hc94@group.calendar.google.com&ctz=America/Los_Angeles'>
          our Google Calendar.
        </a>
      </>
    );
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
                <Box my={12}></Box>
                <CoronavirusUpdate />
                <Box mt={12} mb={6}>
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
              <SittingInPlace />
            </Grid>
            <Grid
              item
              xs={12}
              container
              component='article'
              justify='center'
              className={classes.stickiedEvent}>
              <MorningSit />
              <Grid item xs={12}>
                <Box mt={6}>
                  <Divider />
                </Box>
              </Grid>
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
