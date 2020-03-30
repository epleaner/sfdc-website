import React, {useEffect, useState} from 'react';
import {useParams} from '@reach/router';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {parseEvent} from '../../utils/eventParser';

import Layout from '../Layout';
import SEO from '../SEO';

import EventHeaderText from '../EventHeader/EventHeaderText';
import EventBody from '../EventBody';

const Calendar = () => {
  const {eventId, eventName} = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    fetch(`/.netlify/functions/google-calendar-event?eventId=${eventId}`)
        .then((response) => response.json())
        .then((responseJson) => responseJson.data)
        .then(parseEvent)
        .then(setEventData)
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
  }, []);

  const {
    summary,
    start,
    end,
    attachments,
    description,
    recurrenceRules,
  } = eventData;

  const displayName = eventName
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  return (
    <Layout>
      <SEO
        title={displayName}
        description={`San Francisco Dharma Collective Event Page: ${displayName}`}
      />
      <Grid container>
        <Grid item xs={12}>
          {isLoading ? (
            <Typography align="center" variant="h2">
              Loading event...
            </Typography>
          ) : isError ? (
            <Typography align="center" variant="h2">
              Sorry, couldn't find that event...
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
      </Grid>
    </Layout>
  );
};

export default Calendar;
