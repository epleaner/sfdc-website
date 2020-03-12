import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import {Link} from 'gatsby';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
  },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
}));

const Resources = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Resources"
        description="San Francisco Dharma Collective Resources Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={6}>
            <Typography align="center" variant="h3" component="h1">
              In addition to our regular programming, we offer the following
              resources to our community:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12} alignItems="center" container>
            <Grid className={classes.buttonContainer} item xs={12} sm={6}>
              <Button color="primary" className={classes.anchor}>
                <Link to="/resources/from-our-friends" className={classes.link}>
                  From Our Friends
                </Link>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Other opportunities to study with our teachers.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Hidden mdUp>
              <Box my={1}>
                <Divider />
              </Box>
            </Hidden>
          </Grid>
          <Grid item xs={12} alignItems="center" container>
            <Grid className={classes.buttonContainer} item xs={12} sm={6}>
              <Button color="primary" className={classes.anchor}>
                <Link
                  to="/resources/local-sits-centers"
                  className={classes.link}
                >
                  Local Sits & Centers
                </Link>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Other local places to study the Dharma.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Hidden mdUp>
              <Box my={1}>
                <Divider />
              </Box>
            </Hidden>
          </Grid>
          <Grid item xs={12} alignItems="center" container>
            <Grid className={classes.buttonContainer} item xs={12} sm={6}>
              <Button color="primary" className={classes.anchor}>
                <Link to="/resources/podcasts" className={classes.link}>
                  Podcasts
                </Link>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Our favorite sources for online Dharma, including offerings from
                our teachers.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Hidden mdUp>
              <Box my={1}>
                <Divider />
              </Box>
            </Hidden>
          </Grid>
          <Grid item xs={12} alignItems="center" container>
            <Grid className={classes.buttonContainer} item xs={12} sm={6}>
              <Button color="primary" className={classes.anchor}>
                <Link
                  to="/resources/other-offerings-sfdc"
                  className={classes.link}
                >
                  Other Offerings @ SFDC
                </Link>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                from Yoga to Ecstatic Dance to Consciousness Hacking
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resources;
