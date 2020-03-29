import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Layout from '../Layout';
import SEO from '../SEO';

const useStyles = makeStyles({
  iframe: {
    overflow: 'scroll',
  },
  link: {
    'color': 'inherit',
    'textTransform': 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const Calendar = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO
        title="Calendar"
        description="San Francisco Dharma Collective Calendar Page"
      />
      <Grid container>
        <Grid item container xs={12}>
          <Grid item container justify="center" xs={12} sm={6}>
            <Box my={1}>
              <Button color="primary" variant="outlined">
                <Typography variant="body1">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                    href="https://calendar.google.com/calendar/ical/6lmk34aeh3mpas0kop9ve8hc94%40group.calendar.google.com/public/basic.ics"
                  >
                    iCal Address for Download
                  </Link>
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item container justify="center" xs={12} sm={6}>
            <Box my={1}>
              <Button color="primary" variant="outlined">
                <Typography variant="body1">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                    href="https://calendar.google.com/calendar/embed?src=6lmk34aeh3mpas0kop9ve8hc94%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                  >
                    Public URL for this Calendar
                  </Link>
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Box className={classes.iframe} mt={3}>
            <iframe
              title="sfdc-calendar-iframe"
              src="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=6lmk34aeh3mpas0kop9ve8hc94%40group.calendar.google.com&amp;showTitle=0;color=%2342104A&amp;ctz=America%2FLos_Angeles"
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
            />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Calendar;
