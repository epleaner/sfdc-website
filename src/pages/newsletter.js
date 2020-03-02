import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import MailChimpSignup from '../components/MailChimpSignup';

const Newsletter = () => {
  return (
    <Layout>
      <SEO
        title="Newsletter"
        description="San Francisco Dharma Collective Newsletter Page"
      />
      <Grid container justify="center">
        <Grid item xs={12}>
          <MailChimpSignup />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Newsletter;
