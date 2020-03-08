import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import SitsAndCenters from '../../components/SitsAndCenters';
import OtherSits from '../../components/OtherSits';

const LocalSits = () => {
  return (
    <Layout>
      <SEO
        title="Local Sits and Centers"
        description="San Francisco Dharma Collective Local Sits and Centers Page"
      />
      <Grid container>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography align="center" variant="h2" component="h1">
                Bay Area Sits and Centers
              </Typography>
            </Box>
          </Grid>
          <Grid item container xs={12}>
            <SitsAndCenters />
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Box my={4}>
              <Divider />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography align="center" variant="h2" component="h2">
                Other sits
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography align="center" variant="h5" component="h3">
                Other places where the greater Bay Area goes to meditate and
                engage with the Dharma
              </Typography>
            </Box>
          </Grid>
          <Grid item container component="article" justify="center" xs={12}>
            <OtherSits />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default LocalSits;
