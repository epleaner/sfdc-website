import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Calendar = () => {
  return (
    <Layout>
      <SEO
        title="Calendar"
        description="San Francisco Dharma Collective Calendar Page"
      />
      <Grid container>
        <Grid item container xs={12}>
          <Grid item container justify="center" xs={12} sm={6}>
            <Typography variant="body1">
              <a href="https://calendar.google.com/calendar/ical/6lmk34aeh3mpas0kop9ve8hc94%40group.calendar.google.com/public/basic.ics">
                iCal Address for Download
              </a>
            </Typography>
          </Grid>
          <Grid item container justify="center" xs={12} sm={6}>
            <Typography variant="body1">
              <a href="https://calendar.google.com/calendar/embed?src=6lmk34aeh3mpas0kop9ve8hc94%40group.calendar.google.com&ctz=America%2FLos_Angeles">
                Public URL for this Calendar
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Box mt={3}>
            <iframe
              title="sfdc-calendar-iframe"
              src="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=6lmk34aeh3mpas0kop9ve8hc94%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=America%2FLos_Angeles"
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