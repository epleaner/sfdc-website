import React, {useEffect, useState} from 'react';
import MonthList from './MonthList';
import RecurringEventsList from './RecurringEventsList';
import {parseEvents} from '../utils/eventParser';

const UpcomingEvents = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    fetch('/.netlify/functions/google-calendar')
        .then((response) => response.json())
        .then((responseJson) => responseJson.data.items)
        .then((responseDataItems) => parseEvents(responseDataItems))
        .then((parsedResponse) => {
          setEventData(parsedResponse);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(true);
        });
  }, []);

  const {singleEventsByMonth, recurringEvents} = eventData;

  let headerText;
  if (error) headerText = 'There was error, please try again 😑';
  else if (isLoading) headerText = 'Loading upcoming events...';
  else if (!singleEventsByMonth || singleEventsByMonth.length === 0) {
    headerText = 'No events found';
  } else headerText = 'Upcoming Events';

  return (
    <>
      <MonthList headerText={headerText} eventData={singleEventsByMonth} />
      {!error && !isLoading && (
        <RecurringEventsList eventData={recurringEvents} />
      )}
    </>
  );
};

export default UpcomingEvents;
