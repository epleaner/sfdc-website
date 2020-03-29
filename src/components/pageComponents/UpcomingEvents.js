import React, {useEffect, useState} from 'react';
import {configureAnchors, goToAnchor} from 'react-scrollable-anchor';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Layout from '../Layout';
import SEO from '../SEO';
import CoronavirusUpdate from '../CoronavirusUpdate';
import MonthList from '../MonthList';
import RecurringEventsList from '../RecurringEventsList';
import {parseEvents} from '../../utils/eventParser';

const useStyles = makeStyles((theme) => ({
  stickiedEvent: {
    margin: `${theme.spacing(6)}px 0`,
  },
  centerAligned: {alignSelf: 'center'},
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
}));

const UpcomingEvents = () => {
  configureAnchors({keepLastAnchorHash: false});

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [eventData, setEventData] = useState({});

  const classes = useStyles();

  useEffect(() => {
    fetch('/.netlify/functions/google-calendar')
        .then((response) => response.json())
        .then((responseJson) => responseJson.data.items)
        .then((responseDataItems) => parseEvents(responseDataItems))
        .then((parsedResponse) => {
          setEventData(parsedResponse);
          if (window.location.hash) {
            goToAnchor(window.location.hash.replace('#', ''));
          }
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        })
        .finally(() => setIsLoading(false));
  }, []);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/lotus.png" }) {
        childImageSharp {
          fixed(width: 175, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const {singleEventsByMonth, recurringEvents} = eventData;

  let statusHeaderText = '';
  if (error) {
    statusHeaderText =
      'There was an error fetching our events, please try again 😑';
  } else if (isLoading) statusHeaderText = 'Loading upcoming events...';
  else if (!singleEventsByMonth || singleEventsByMonth.length === 0) {
    statusHeaderText = 'No events found';
  }

  return (
    <Layout>
      <SEO
        title="Upcoming & Recurring Events"
        description="San Francisco Dharma Collective Upcoming & Recurring Events Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant={'h2'} align="center" component="h1">
                Events Coming Up at SFDC
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box mt={6}>
                <Box mb={6}>
                  <Divider />
                </Box>
                <Typography gutterBottom variant="body1" align="center">
                  All our classes are now hosted online. Most classes are on
                  Zoom and use this link:{' '}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.anchor}
                    href="http://bit.ly/sfdharma"
                  >
                    http://bit.ly/sfdharma
                  </Link>
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
              component="article"
              justify="center"
              className={classes.stickiedEvent}
            >
              <Grid item xs={12} sm={3} className={classes.centerAligned}>
                <Box mb={3}>
                  <Typography variant="h3" align="center" component="h1">
                    Morning sits
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} container>
                <Grid
                  item
                  xs={12}
                  container
                  alignContent="center"
                  justify="center"
                >
                  <Box mb={1}>
                    <Typography variant="h4" align="center" component="h2">
                      Every day
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  alignContent="center"
                  justify="center"
                >
                  <Box>
                    <Typography variant="h6" align="center" component="h3">
                      7:30 - 8:15am
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  alignContent="center"
                  justify="center"
                >
                  <Box my={3} mx={2}>
                    <Typography variant="body1" align="center" component="p">
                      Join us online:{' '}
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.anchor}
                        href="https://zoom.us/j/545039806"
                      >
                        https://zoom.us/j/545039806
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  alignContent="center"
                  justify="center"
                >
                  <Box mb={3} mx={2}>
                    <Typography variant="body2" align="center" component="p">
                      Arriving late and leaving early is okay for morning sits!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3} container>
                <Grid item xs={12} container justify="center">
                  <Box mt={3}>
                    <Img fixed={data.file.childImageSharp.fixed} alt="Lotus" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box mb={2}>
                    <Typography
                      variant="caption"
                      align="center"
                      component="aside"
                    >
                      Morning sits are peer-led.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box mt={6}>
                  <Divider />
                </Box>
              </Grid>
            </Grid>
            {statusHeaderText !== '' && (
              <Grid item xs={12}>
                <Box mt={4} mb={3}>
                  <Typography variant={'h3'} align="center" component="h2">
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
    </Layout>
  );
};

export default UpcomingEvents;
