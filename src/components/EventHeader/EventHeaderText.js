import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {
  humanReadableDateTime,
  humanReadableRecurranceRules,
  humanReadableTime,
  formatRecurrenceRules,
  parseEvent,
} from '../../utils/eventParser';

export default ({summary, recurrenceRules, start, end, big}) => (
  <Grid item container xs={big ? 12 : 10}>
    <Grid item xs={12}>
      <Typography align="left" variant={big ? 'h3' : 'h5'}>
        {summary}
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
