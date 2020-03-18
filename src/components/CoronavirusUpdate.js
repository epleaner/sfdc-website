import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import DonateButton from './DonateButton';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
  divider: {
    backgroundColor: 'rgba(254,172,102,1)',
  },
}));

const CoronavirusUpdate = () => {
  const classes = useStyles();

  return (
    <>
      <Divider className={classes.divider} />
      <Box my={8}>
        <Box mb={6}>
          <Typography variant="body1">
            In light of the COVID-19 outbreak and guidance from government and
            medical professionals,{' '}
            <b>we are moving our classes and sits online starting today</b>. We
            will re-evaluate this decision on a weekly basis and keep you
            posted.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            One way we can unite immediately is by sitting together online. We
            will be using Zoom to host most of our classes.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            This is the link:{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className={classes.anchor}
              href="https://zoom.us/j/545039806"
            >
              https://zoom.us/j/545039806
            </Link>
          </Typography>
        </Box>
        <Box mb={6}>
          <Typography variant="body1">
            Please join us online as we create a new means for connecting our
            collective consciousness.
          </Typography>
        </Box>
        <Box mb={4}>
          <Typography variant="body1">
            While the center is closed, we will continue to depend on your
            generosity to pay our rent and other bills. Please consider giving a
            one-time donation to help us get through this period.
          </Typography>
        </Box>
        <Grid item xs={12} container justify="center">
          <DonateButton />
        </Grid>
      </Box>
      <Divider className={classes.divider} />
    </>
  );
};

export default CoronavirusUpdate;
