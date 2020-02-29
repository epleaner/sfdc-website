import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  eventDescription: {
    marginTop: theme.spacing(2),
  },
}));

const humanReadableTime = (start, end) =>
  `${start.format('dddd, MMMM Do, h:mma')} - ${end.format('h:mma')}`;

const recurranceFrequencyStrings = {
  weekly: 'week',
  monthly: 'month',
};

const daysOfWeekStrings = {
  mo: 'Monday',
  tu: 'Tuesday',
  we: 'Wednesday',
  th: 'Thursday',
  fr: 'Friday',
  sa: 'Saturday',
  su: 'Sunday',
};

const humanReadableRecurrance = (recurranceRules) => {
  if (!recurranceRules.freq) return '';
  const fullMessage = '';
  let measure = '';

  const messageParts = [];

  if (recurranceRules.count) {
    messageParts.push(recurranceRules.count);
  } else messageParts.push('Every');

  const dayRules = recurranceRules.byday.split(',');

  if (dayRules.length > 1) {
    measure += dayRules.map((rule) => daysOfWeekStrings[rule]).join(', ');
  } else {
    const [full, ordinal, day] = recurranceRules.byday.match(/(-?\d)?([a-z]+)/);

    if (ordinal) {
      measure +=
        ordinal === '-1' ? 'last ' : `${moment.localeData().ordinal(ordinal)} `;
    }

    if (day) {
      measure += `${daysOfWeekStrings[day]}`;
    }
  }

  if (recurranceRules.count) measure += 's';

  messageParts.push(measure);

  if (recurranceRules.freq === 'monthly') messageParts.push('of the month');

  if (recurranceRules.until) {
    messageParts.push(
        `until ${moment(recurranceRules.until.toUpperCase())
            .add(1, 'months')
            .format('MMMM YYYY')}`,
    );
  }

  return messageParts.join(' ');
};

export default function EventList(props) {
  const {id, summary, start, end, description, recurrenceValues} = props;
  const classes = useStyles();

  return (
    <ListItem key={id} button className={classes.nested}>
      <ListItemText
        disableTypography
        primary={<Typography variant="h5">{summary}</Typography>}
        secondary={
          <>
            <Typography component="span" variant="body2" color="textPrimary">
              {recurrenceValues ?
                humanReadableRecurrance(recurrenceValues) :
                humanReadableTime(start, end)}
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
