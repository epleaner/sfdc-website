import React from 'react';
import {Router} from '@reach/router';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Layout from '../../components/Layout';
import NotFound from '../../components/pageComponents/404';
import UpcomingEvents from '../../components/pageComponents/UpcomingEvents';
import Calendar from '../../components/pageComponents/Calendar';
import Event from '../../components/pageComponents/Event';

const UpcomingRecurringEvents = () => {
  return (
    <Layout>
      <Router basepath="/upcoming-events">
        <Event path="/event/:eventName" />
        <Calendar path="/calendar" />
        <UpcomingEvents path="/" />
        <NotFound default />
      </Router>
    </Layout>
  );
};

export default UpcomingRecurringEvents;
