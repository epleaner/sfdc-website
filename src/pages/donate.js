import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import Link from '@material-ui/core/Link';
import React from 'react';
import SEO from '../components/SEO';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    'textDecoration': 'none',
    'color': 'inherit',
    'textTransform': 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const Donate = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Donate"
        description="San Francisco Dharma Collective Donate Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={3}>
            <Typography align="center" variant="h2" component="h1">
              Donate to SFDC
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={10}>
            <Typography align="center" variant="h5" component="h2">
              <i>Dana has the effect of purifying and transforming the mind</i>
            </Typography>
          </Box>
        </Grid>
        <Grid container item>
          <Grid item xs={12} container justify="center">
            <Box mb={8}>
              <Button color="primary" size="large" variant="contained">
                <Typography variant="body1" align="center">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                    className={classes.link}
                  >
                    Donate
                  </Link>
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="body1">
                We are thriving because of your presence, efforts, and support.
                We will continue to thrive with contributions of everyone.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="body1">
                Keeping the SF Dharma Collective open costs about{' '}
                <b>$330 per day</b>. The SFDC is an all volunteer organization.
                All donations go toward keeping the doors open and supporting
                our teachers.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="body1">
                You are the collective, we are the collective.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="body1">
                Every dollar counts, and monthly donations show just how vibrant
                we are. Consider some of the following:
                <ul>
                  <li>
                    Monthly Donation - help us move toward sustainability and
                    our ultimate goal of giving all dana to teachers.
                  </li>
                  <li>One-time Donation - every contribution matters.</li>
                </ul>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={8}>
              <Typography variant="body1">
                All donations are tax deductible. The San Francisco Dharma
                Collective is a 501(c)3 non-profit educational organization. Ask
                your employer about matching donations.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} container justify="center">
            <Box mb={2}>
              <Button color="primary" size="large" variant="contained">
                <Typography variant="body1" align="center">
                  <Link href="" className={classes.link}>
                    Donate
                  </Link>
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Donate;
