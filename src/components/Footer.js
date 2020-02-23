import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto"
    // backgroundColor:
    //   theme.palette.type === "dark"
    //     ? theme.palette.grey[800]
    //     : theme.palette.grey[200]
  }
}));

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
      <Grid item xs={12} container direction="row" justify="center">
        <Grid item xs={12} sm={2}>
          <Typography variant="body1" align="center">
            <Link to="/teachers">Teachers</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="body1" align="center">
            <Link to="/about-us">About Us</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="body1" align="center">
            <Link to="/donate">Donate</Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box my={3}>
          <Typography align="center" variant="body1">
            <span>San Francisco Dharma Collective</span>
            <span> • </span>
            <span>2701 Folsom Street, San Francisco, CA 94110</span>
            <span> • </span>
            <span>415-404-9333</span>
            <span> • </span>
            <span>
              <a href="mailto:sfdharmacollective@gmail.com">
                sfdharmacollective@gmail.com
              </a>
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
