import React, {useEffect, useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import MonthList from './MonthList';
import RecurringEventsList from './RecurringEventsList';
import CoronavirusUpdate from './CoronavirusUpdate';
import {parseEvents} from '../utils/eventParser';

const useStyles = makeStyles((theme) => ({
  stickiedEvent: {
    margin: `${theme.spacing(6)}px 0`,
    // background: theme.palette.primaryBlue2,
  },
  centerAligned: {alignSelf: 'center'},
}));

const UpcomingEvents = () => {
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
          <Typography
            gutterBottom
            variant="body1"
            align="center"
            component="aside"
          >
            Most evenings begin with 30 minutes of meditation, followed by
            discussion and/or reflections by the teacher.
          </Typography>
          <Typography variant="body1" align="center" component="aside">
            Beginning and experienced practitioners are welcome.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box my={6}>
          <CoronavirusUpdate />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        container
        component="article"
        className={classes.stickiedEvent}
      >
        <Grid item xs={12} sm={4} className={classes.centerAligned}>
          <Box my={3}>
            <Typography variant="h3" align="center" component="h1">
              Morning sits
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} container>
          <Grid item xs={12} container alignContent="center" justify="center">
            <Box my={2}>
              <Typography variant="h4" align="center" component="h2">
                Every Weekday, Monday - Friday
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} container alignContent="center" justify="center">
            <Box mb={2}>
              <Typography variant="h5" align="center" component="h3">
                7:30 - 8:15am
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} container alignContent="center" justify="center">
            <Box mb={3} mx={2}>
              <Typography variant="body1" align="center" component="p">
                Arriving late and leaving early is okay for morning sits!
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} container alignSelf="center">
          <Grid item xs={12} container justify="center">
            <Box mt={3}>
              <Img fixed={data.file.childImageSharp.fixed} alt="Lotus" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="caption" align="center" component="aside">
                Morning sits are peer-led.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box mt={10}>
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
  );
};

export default UpcomingEvents;
