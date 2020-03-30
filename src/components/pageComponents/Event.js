import React, {useEffect, useState} from 'react';
import {useParams} from '@reach/router';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

import {
  humanReadableDateTime,
  humanReadableRecurranceRules,
  humanReadableTime,
  formatRecurrenceRules,
  parseEvent,
} from '../../utils/eventParser';

import Layout from '../Layout';
import SEO from '../SEO';

import EventHeaderText from '../EventHeader/EventHeaderText';
import EventBody from '../EventBody';

const useStyles = makeStyles((theme) => ({
  eventDescription: {
    'marginTop': theme.spacing(2),
    '& a': {
      'color': 'rgba(62,149,153,1)',
      'textDecoration': 'none',
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'auto',
      },
    },
  },
  eventDescriptionContainer: {
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },
  avatar: {
    width: '250px',
    height: '250px',
  },
  avatarContainer: {
    [theme.breakpoints.down('xs')]: {
      order: 0,
    },
  },
}));

const Calendar = () => {
  const classes = useStyles();

  const {eventId, eventName} = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    fetch(`/.netlify/functions/google-calendar-event?eventId=${eventId}`)
        .then((response) => response.json())
        .then((responseJson) => responseJson.data)
        .then(parseEvent)
        .then(setEventData)
        .then(() => setIsLoading(false));
  }, []);

  const {
    summary,
    start,
    end,
    attachments,
    description,
    recurrenceRules,
  } = eventData;

  return (
    <Layout>
      <SEO
        title="Event page"
        description="San Francisco Dharma Collective Event Page"
      />
      <Grid container>
        {isLoading ? (
          <Typography align="center" variant="h2">
            Loading event...
          </Typography>
        ) : (
          <>
            <EventHeaderText
              big
              {...{summary, recurrenceRules, start, end}}
            />
            <Box mt={3}>
              <EventBody {...{attachments, description}} />
            </Box>
          </>
        )}
      </Grid>
    </Layout>
  );
};

export default Calendar;
