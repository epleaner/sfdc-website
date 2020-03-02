import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import UpcomingEvents from '../../components/UpcomingEvents';

const UpcomingRecurringEvents = () => {
  return (
    <Layout>
      <SEO
        title="Upcoming & Recurring Events"
        description="San Francisco Dharma Collective Upcoming & Recurring Events Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <UpcomingEvents />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default UpcomingRecurringEvents;
