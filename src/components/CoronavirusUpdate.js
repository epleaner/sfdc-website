import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

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
        <Box mb={2}>
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
            One way we can unite immediately is by sitting together{' '}
            <b>online</b>. This will either be through our{' '}
            <Link
              className={classes.anchor}
              href="https://www.youtube.com/channel/UCxrOXx3uqvfbYhs0A7twjSw/featured"
            >
              YouTube Channel
            </Link>{' '}
            or{' '}
            <Link
              className={classes.anchor}
              href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fsfdharmacollective%2F&sa=D&sntz=1&usg=AFQjCNG5Lk5-CA4Fha2qpLby67dxtZ2nUw"
            >
              Facebook
            </Link>
            . We are working on this with the intention of live streaming many
            of our sits.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            Please join us online as we create a new means for connecting our
            collective consciousness.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            While the center is closed, we will continue to depend on your
            generosity to pay our rent and other bills. Please consider giving a
            one-time donation to help us get through this period:{' '}
            <Link
              className={classes.anchor}
              href="https://sfdharmacollective.org/donate"
            >
              https://sfdharmacollective.org/donate
            </Link>
          </Typography>
        </Box>
      </Box>
      <Divider className={classes.divider} />
    </>
  );
};

export default CoronavirusUpdate;
