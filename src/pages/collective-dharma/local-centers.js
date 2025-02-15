import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import OtherSits from '../../components/OtherSits';
import React from 'react';
import SEO from '../../components/SEO';
import SitsAndCenters from '../../components/SitsAndCenters';
import Typography from '@material-ui/core/Typography';

const LocalSits = () => {
  return (
    <>
      <SEO
        title='Local Practices and Centers'
        description='San Francisco Dharma Collective Local Practices and Centers Page'
      />
      <Layout>
        <Grid container>
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Box mb={4}>
                <Typography align='center' variant='h2' component='h1'>
                  Bay Area Practices and Centers
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
                <Typography align='center' variant='h2' component='h2'>
                  Other Practices
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={4}>
                <Typography align='center' variant='h5' component='h3'>
                  Other places where the greater Bay Area goes to meditate and
                  engage with the Dharma
                </Typography>
              </Box>
            </Grid>
            <Grid item container component='article' justify='center' xs={12}>
              <OtherSits />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default LocalSits;
