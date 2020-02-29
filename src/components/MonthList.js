import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import EventList from './EventList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

export default function MonthList(props) {
  const {eventData} = props;
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Upcoming Events
        </ListSubheader>
      }
      className={classes.root}
    >
      {eventData.map((eventsByMonth) => (
        <EventList key={eventsByMonth.month} {...eventsByMonth} />
      ))}
    </List>
  );
}
