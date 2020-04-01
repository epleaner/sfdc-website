import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'gatsby';

import {
  humanReadableDateTime,
  humanReadableRecurranceRules,
  humanReadableTime,
  parseEvent,
} from '../../utils/eventParser';

const useStyles = makeStyles({
  link: {
    'color': 'inherit',
    'textDecoration': 'none',
    '&:hover': {
      textDecoration: 'none',
      color: 'rgba(62,149,153,1)',
    },
  },
});

export default ({summary, recurrenceRules, start, end, big, eventUrl}) => {
  const classes = useStyles();

  return (
    <Grid item container xs={big ? 12 : 10}>
      <Grid item xs={12}>
        <Typography align="left" variant={big ? 'h3' : 'h5'}>
          {big ? (
            summary
          ) : (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
              to={`/${eventUrl}`}
            >
              {summary}
            </Link>
          )}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="left" variant="body2" color="textPrimary">
          {recurrenceRules ?
            `${humanReadableRecurranceRules(recurrenceRules)}
${humanReadableTime(start, end)}` :
            humanReadableDateTime(start, end)}
        </Typography>
      </Grid>
    </Grid>
  );
};
