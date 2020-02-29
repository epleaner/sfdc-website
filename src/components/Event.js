import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

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

export default function EventList(props) {
  const {id, summary, start, end, description} = props;
  const classes = useStyles();

  return (
    <ListItem key={id} button className={classes.nested}>
      <ListItemText
        disableTypography
        primary={<Typography variant="h5">{summary}</Typography>}
        secondary={
          <>
            <Typography component="span" variant="body2" color="textPrimary">
              {humanReadableTime(start, end)}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              className={classes.eventDescription}
              dangerouslySetInnerHTML={{
                __html: `${description}`,
              }}
            />
          </>
        }
      />
    </ListItem>
  );
}
