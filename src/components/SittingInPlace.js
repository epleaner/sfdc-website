import moment from 'moment';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { humanReadableTime } from '../utils/eventParser';

const useStyles = makeStyles((theme) => ({
  centerAligned: { alignSelf: 'center' },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
}));

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/lotus.png" }) {
        childImageSharp {
          fixed(width: 175, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const localStartTime = moment('8:30 AM', 'LT ZZ').local();
  const localEndTime = moment('9 AM', 'LT ZZ').local();

  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={4} className={classes.centerAligned}>
        <Box mb={3}>
          <Typography variant='h3' align='center' component='h1'>
            <Link
              to={
                '/events/r/sitting-in-place-with-andrea-vecchione-online-only-'
              }
              className={classes.anchor}>
              Sitting in place
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} container className={classes.centerAligned}>
        <Grid item xs={12} container alignContent='center' justify='center'>
          <Box mb={1}>
            <Typography variant='h4' align='center' component='h2'>
              Every Tuesday, Wednesday, and Thursday. Online only.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container alignContent='center' justify='center'>
          <Box>
            <Typography variant='h6' align='center' component='h3'>
              {humanReadableTime(localStartTime, localEndTime)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
