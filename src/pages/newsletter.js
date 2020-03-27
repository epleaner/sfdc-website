import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import MailChimpSignup from '../components/MailChimpSignup';
import MailChimpNewsletter from '../components/MailChimpNewsletter';

const Newsletter = () => {
  return (
    <Layout>
      <SEO
        title="Newsletter"
        description="San Francisco Dharma Collective Newsletter Page"
      />
      <Grid container justify="center">
        <Grid item xs={12}>
          <Box mb={6}>
            <Typography align="center" variant="h2" component="h1">
              Keep up to date with sangha news and offerings
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mb={3}>
            <MailChimpNewsletter />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mb={3}>
            <MailChimpSignup />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Newsletter;
