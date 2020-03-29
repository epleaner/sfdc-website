import React from 'react';
import {Router} from '@reach/router';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import UpcomingEvents from '../../components/pageComponents/UpcomingEvents';
import Calendar from '../../components/pageComponents/Calendar';

const UpcomingRecurringEvents = () => {
  return (
    <Router basepath="/upcoming-events">
      <UpcomingEvents path="/" />
      <Calendar path="/calendar" />
    </Router>
  );
};

export default UpcomingRecurringEvents;
