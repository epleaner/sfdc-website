import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import Link from '@material-ui/core/Link';
import React from 'react';
import SEO from '../../components/SEO';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {listStyle: 'none', padding: 0},
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
});

const Leadership = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Leadership"
        description="San Francisco Dharma Collective Leadership Page"
      />
      <Grid container>
        <Grid item container>
          <Grid item xs={12}>
            <Box mb={3}>
              <Typography align="center" variant="h2" component="h1">
                SF Dharma Collective Leadership
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={6}>
              <Typography align="center" variant="h5" component="h2">
                The San Francisco Dharma Collective is a sangha-led dharma
                community.
              </Typography>
            </Box>
          </Grid>
          <Grid container item>
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant="body1">
                  Our leadership includes a board of directors and a number of
                  committees.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant="body1">
                  We meet on Monday evenings in San Francisco. If you are
                  interested in attending a meeting, please contact{' '}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.anchor}
                    href="mailto:sfdharmacollective@gmail.com"
                  >
                    sfdharmacollective@gmail.com
                  </Link>
                  .
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                We welcome volunteers to join committees. If you are interested
                in volunteering, please contact{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.anchor}
                  href="mailto:sfdcvolunteers@gmail.com"
                >
                  sfdcvolunteers@gmail.com
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box mt={6}>
              <Typography align="center" variant="h3" component="h3">
                SF Dharma Collective Board of Directors
              </Typography>
            </Box>
          </Grid>
          <Grid item container xs={12}>
            <Grid item container justify="center" xs={12} sm={4}>
              <ul className={classes.list}>
                <Typography align="center" variant="body1" component="li">
                  Brendan O'Hara
                </Typography>

                <Typography align="center" variant="body1" component="li">
                  Genevieve Church
                </Typography>

                <Typography align="center" variant="body1" component="li">
                  Jenny Doll
                </Typography>
              </ul>
            </Grid>
            <Grid item container justify="center" xs={12} sm={4}>
              <ul className={classes.list}>
                <Typography align="center" variant="body1" component="li">
                  Kati Devaney
                </Typography>

                <Typography align="center" variant="body1" component="li">
                  Noam Szoke
                </Typography>

                <Typography align="center" variant="body1" component="li">
                  Rae Brosnan
                </Typography>
              </ul>
            </Grid>
            <Grid item container justify="center" xs={12} sm={4}>
              <ul className={classes.list}>
                <Typography align="center" variant="body1" component="li">
                  Snow McNaughton
                </Typography>

                <Typography align="center" variant="body1" component="li">
                  Suzanne Hollis
                </Typography>

                <Typography align="center" variant="body1" component="li">
                  Tia Paquin
                </Typography>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Leadership;
