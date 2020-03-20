import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {Link} from 'gatsby';
import MaterialUILink from '@material-ui/core/Link';
import React from 'react';
import SocialMedia from '../components/SocialMedia';
import Venmo from '../components/Venmo';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    marginTop: 'auto',
  },
  link: {
    'textDecoration': 'none',
    'color': 'inherit',
    'textTransform': 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.footer}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Box my={6}>
          <Divider className={classes.divider} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mb={2}>
          <SocialMedia />
        </Box>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Box mb={4}>
          <Venmo />
        </Box>
      </Grid>
      <Grid item xs={12} container justify="center">
        {[
          {label: 'Donate', linkTo: '/donate'},
          {label: 'About Us', linkTo: '/about-us'},
          {label: 'Upcoming Events', linkTo: '/upcoming-events'},
          {label: 'Teachers', linkTo: '/about-us/teachers'},
        ].map(({label, linkTo}) => (
          <Grid item container justify="center" xs={12} sm={3} key={label}>
            <Box my={2}>
              <Button color="primary" variant="outlined">
                <Typography variant="body1" align="center">
                  <Link to={linkTo} className={classes.link}>
                    {label}
                  </Link>
                </Typography>
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Box my={4}>
          <Typography align="center" variant="body1">
            <span>San Francisco Dharma Collective</span>
            <span> • </span>
            <span>2701 Folsom Street, San Francisco, CA 94110</span>
            <span> • </span>
            <span>415-404-9333</span>
            <span> • </span>
            <span>
              <MaterialUILink
                target="_blank"
                rel="noopener noreferrer"
                className={classes.anchor}
                href="mailto:sfdharmacollective@gmail.com"
              >
                sfdharmacollective@gmail.com
              </MaterialUILink>
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="body2">
          All classes and sits are open to all and no registration is necessary.
          We are supported by your generosity (dana). No one is ever turned away
          for lack of funds. SFDC is wheelchair accessible and has two
          accessible bathroom stalls. We use fragrance-free cleaning products.
        </Typography>
        <Box mb={2} />
        <Typography align="center" variant="body2">
          © 2020 San Francisco Dharma Collectiove
        </Typography>
        <Box mb={6} />
      </Grid>
    </Grid>
  );
};

export default Footer;
