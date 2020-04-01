import React from 'react';
import {Router} from '@reach/router';

import Layout from '../../components/Layout';
import Event from '../../components/pageComponents/Event';

export default () => {
  return (
    <Router basepath="/events">
      <Event path="/:eventName" />
    </Router>
  );
};
