import React from 'react';
import Event from './Event';

export default function RecurringEventsList(props) {
  const {eventData} = props;

  return (
    <>
      {eventData.length > 0 &&
        eventData.map((event) => <Event key={event.id} {...event} />)}
    </>
  );
}
