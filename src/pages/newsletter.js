import React, {useEffect} from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Newsletter = () => {
  useEffect(() => {
    fetch('/.netlify/functions/google-calendar')
        .then((response) => response.json())
        .then(console.log);
  }, []);

  return (
    <Layout>
      <SEO
        title="Newsletter"
        description="San Francisco Dharma Collective Newsletter Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="h2">
            Coming soon...
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Newsletter;
