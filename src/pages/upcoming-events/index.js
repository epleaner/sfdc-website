import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import React from 'react';
import SEO from '../../components/SEO';
import Typography from '@material-ui/core/Typography';
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
