import React from 'react';
import EventsByMonthList from './EventsByMonthList';
import EventListContainer from './EventListContainer';

export default function MonthList(props) {
  const {eventData, headerText} = props;

  return (
    <EventListContainer headerText={headerText}>
      {eventData &&
        eventData.map((eventsByMonth) => (
          <EventsByMonthList key={eventsByMonth.month} {...eventsByMonth} />
        ))}
    </EventListContainer>
  );
}
