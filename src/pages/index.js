import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LotusImagePath from '../../static/images/lotus.png';

const useStyles = makeStyles({
  lotusImage: {maxWidth: '500px', width: '100%', height: '100%'},
});

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Home"
        description="Home page of San Francisco Dharma Collective, a sangha-run meditation collective in San Francisco's Mission district"
      />
      <Grid container justify="center">
        <Grid item container sm={12}>
          <Grid item xs={12}>
            <Box mb={5} mt={2}>
              <Typography align="center" variant="h1" component="h1">
                Meditate with us.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h2" component="h2">
              The SF Dharma Collective is a community-led sangha.
            </Typography>
          </Grid>
          <Grid item container justify="center" xs={12}>
            <Box my={10}>
              <img
                className={classes.lotusImage}
                src={LotusImagePath}
                alt="Lotus"
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
