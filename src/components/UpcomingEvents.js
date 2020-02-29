import React, {useEffect, useState} from 'react';
import {parseEvents} from '../utils/eventParser';
import MonthList from './MonthList';

const UpcomingEvents = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch('/.netlify/functions/google-calendar')
        .then((response) => response.json())
        .then((responseJson) => responseJson.data.items)
        .then((responseDataItems) => {
          setEventData(parseEvents(responseDataItems));
          setIsLoading(false);
        });
  }, []);

  if (isLoading || eventData.length === 0) return <div>Loading events...</div>;

  return <MonthList eventData={eventData} />;
};

export default UpcomingEvents;
