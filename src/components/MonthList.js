import React from 'react';
import EventsByMonthList from './EventsByMonthList';
import EventListContainer from './EventListContainer';

export default function MonthList(props) {
  const {eventData} = props;

  return (
    <EventListContainer>
      {eventData &&
        eventData.map((eventsByMonth) => (
          <EventsByMonthList key={eventsByMonth.month} {...eventsByMonth} />
        ))}
    </EventListContainer>
  );
}
