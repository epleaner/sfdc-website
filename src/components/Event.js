import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import {
  humanReadableRecurrance,
  humanReadableDateTime,
  humanReadableTime,
} from '../utils/eventParser';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  eventDescription: {
    marginTop: theme.spacing(2),
  },
}));

export default function Event(props) {
  const {id, summary, start, end, description, recurrenceValues} = props;
  const classes = useStyles();

  return (
    <ListItem key={id} className={classes.nested}>
      <ListItemText
        disableTypography
        primary={<Typography variant="h5">{summary}</Typography>}
        secondary={
          <>
            <Typography component="span" variant="body2" color="textPrimary">
              {recurrenceValues ?
                `${humanReadableRecurrance(recurrenceValues)}
                  ${humanReadableTime(start, end)}` :
                humanReadableDateTime(start, end)}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              className={classes.eventDescription}
              dangerouslySetInnerHTML={{
                __html: `${description || ''}`,
              }}
            />
          </>
        }
      />
    </ListItem>
  );
}
