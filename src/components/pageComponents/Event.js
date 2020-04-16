import React, { useEffect, useState } from "react";
import { useParams } from "@reach/router";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { parseQueriedEvent } from "../../utils/eventParser";

import Layout from "../Layout";
import SEO from "../SEO";

import EventHeaderText from "../EventHeader/EventHeaderText";
import EventBody from "../EventBody";

export default () => {
  const { eventName, eventDate } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [eventData, setEventData] = useState([]);

  const eventNameQueryParam = eventName.split("-").join(" ");

  useEffect(() => {
    fetch(
      `/.netlify/functions/google-calendar-event?eventName=${eventNameQueryParam}`
    )
      .then((response) => response.json())
      .then((responseJson) => responseJson.data.items)
      .then((items) => parseQueriedEvent(items, eventNameQueryParam, eventDate))
      .then(setEventData)
      .catch((error) => {
        console.log(error);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const displayName = isLoading
    ? "Loading event..."
    : isError || !eventData
    ? "Event not found"
    : eventData.summary;

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
          ) : isError || !eventData ? (
            <Typography align="center" variant="h2">
              Sorry, we couldn't find that event.
            </Typography>
          ) : (
            <>
              <EventHeaderText big {...eventData} />
              <Box mt={3}>
                <EventBody {...eventData} />
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};