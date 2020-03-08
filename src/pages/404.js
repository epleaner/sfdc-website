import React from 'react';
import Layout from '../components/Layout';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO
        title="Not Found"
        description="Not found page of San Francisco Dharma Collective, a sangha-run meditation collective in San Francisco's Mission district"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={3}>
            <Typography align="center" variant="h2" component="h1">
              Form is emptiness, emptiness is form. Form is not other than
              emptiness; emptiness is not other than form.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="body1">
            Sorry, the page you're looking for cannot be found.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage;
