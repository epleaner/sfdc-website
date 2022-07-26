import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { urlFormattedSummary } from '../utils/eventParser';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';

import { humanReadableDateTime } from '../utils/eventParser';

const useStyles = makeStyles({
  link: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: 'rgba(62,149,153,1)',
    },
  },
  recurringEventLink: {
    color: 'rgba(62,149,153,1)',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const Event = (props) => {
  const { summary, start, end } = props;

  const classes = useStyles();

  let urlEncodedSummary =
    urlFormattedSummary(summary) + `/${start.format('M-D-YYYY')}`;

  const eventUrl = `events/${urlEncodedSummary}`;

  return (
    <Grid item xs={12}>
      <Typography align={'center'} variant={'h5'}>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          className={classes.link}
          to={`/${eventUrl}`}>
          {summary}
        </Link>
      </Typography>
      <Typography align={'center'} variant='body2' color='textPrimary'>
        {humanReadableDateTime(start, end)}
      </Typography>
    </Grid>
  );
};

export default Event;
