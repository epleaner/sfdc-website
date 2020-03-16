import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  icon: {
    'transition': 'all .25s ease-in-out',
    'color': theme.palette.primaryBlue4,
    '&:hover': {
      color: theme.palette.primaryBlue0,
    },
  },
}));

const SocialMedia = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item container justify="center" xs={2}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/sfdharmacollective"
          className={classes.icon}
        >
          <FacebookIcon />
        </Link>
      </Grid>
      <Grid item container justify="center" xs={2}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/SFDC_Folsom"
          className={classes.icon}
        >
          <TwitterIcon />
        </Link>
      </Grid>
      <Grid item container justify="center" xs={2}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/sfdharmacollective/"
          className={classes.icon}
        >
          <InstagramIcon />
        </Link>
      </Grid>
      <Grid item container justify="center" xs={2}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCxrOXx3uqvfbYhs0A7twjSw/featured"
          className={classes.icon}
        >
          <YouTubeIcon />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
