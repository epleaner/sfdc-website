import React from 'react';
import {Router} from '@reach/router';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import NotFound from '../../pages/404';
import UpcomingEvents from '../../components/pageComponents/UpcomingEvents';
import Calendar from '../../components/pageComponents/Calendar';
import Event from '../../components/pageComponents/Event';

const UpcomingRecurringEvents = () => {
  return (
    <Router basepath="/upcoming-events">
      <NotFound default />
      <UpcomingEvents path="/" />
      <Calendar path="/calendar" />
      <Event path="/event/:eventName/:eventId" />
    </Router>
  );
};

export default UpcomingRecurringEvents;
