import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import EventListContainer from './EventListContainer';
import Event from './Event';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

export default function RecurringEventsList(props) {
  const {eventData} = props;
  const classes = useStyles();

  return eventData ? (
    <EventListContainer headerText="Recurring events">
      {eventData.map((event) => (
        <React.Fragment key={event.id}>
          <Event {...event} />
          <Divider className={classes.divider} />
        </React.Fragment>
      ))}
    </EventListContainer>
  ) : null;
}
