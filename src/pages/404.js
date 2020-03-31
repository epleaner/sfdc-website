import React from 'react';
import Layout from '../components/Layout';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NotFound from '../components/pageComponents/404';

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
