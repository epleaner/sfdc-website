import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import MaterialUILink from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'gatsby';
import SocialMedia from '../components/SocialMedia';

const useStyles = makeStyles({
  footer: {
    marginTop: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
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
        <Box mb={3}>
          <SocialMedia />
        </Box>
      </Grid>
      <Grid item xs={12} container justify="center">
        {[
          {label: 'Teachers', linkTo: '/teachers'},
          {label: 'About Us', linkTo: '/about-us'},
          {label: 'Donate', linkTo: '/donate'},
        ].map(({label, linkTo}) => (
          <Grid item container justify="center" xs={12} sm={3} key={label}>
            <Box my={1}>
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
        <Box my={2}>
          <Typography align="center" variant="body1">
            <span>San Francisco Dharma Collective</span>
            <span> • </span>
            <span>2701 Folsom Street, San Francisco, CA 94110</span>
            <span> • </span>
            <span>415-404-9333</span>
            <span> • </span>
            <span>
              <MaterialUILink href="mailto:sfdharmacollective@gmail.com">
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
        <Box mb={6} />
      </Grid>
    </Grid>
  );
};

export default Footer;
