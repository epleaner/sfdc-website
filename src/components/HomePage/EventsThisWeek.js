import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Event from '../Event.js';

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
    fetch('/.netlify/functions/google-calendar-this-week?singleEvents=true')
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
    <Box mb={10}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant={'h2'} align='center' component='h1'>
                Events this week at SFDC
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box my={2}>
                <Typography variant={'h6'} align='center' component='h2'>
                  {error
                    ? 'Sorry, temporarily unavailable. Please check out our Google Calendar.'
                    : 'Event times have been automatically converted to local timezone'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              {error ? (
                <Typography
                  variant={'h3'}
                  align='center'
                  className={classes.anchor}>
                  <a href='https://calendar.google.com/calendar/u/0/embed?src=6lmk34aeh3mpas0kop9ve8hc94@group.calendar.google.com&ctz=America/Los_Angeles'>
                    Google Calendar
                  </a>
                </Typography>
              ) : (
                singleEventsByMonth &&
                singleEventsByMonth.map(
                  (es) =>
                    es.events &&
                    es.events.map((event) => (
                      <Event key={event.id} {...event} />
                    ))
                )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpcomingEvents;
