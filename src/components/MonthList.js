import React from 'react';
import EventList from './EventList';

export default function MonthList(props) {
  const {eventData} = props;

  return (
    <>
      {eventData.map((eventsByMonth) => (
        <EventList key={eventsByMonth.month} {...eventsByMonth} />
      ))}
    </>
  );
}
