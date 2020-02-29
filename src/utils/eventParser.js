import moment from 'moment';

const isAfterToday = (e) => e.start.isAfter(moment().startOf('day'));

const descendingStartDate = (a, b) => a.start.isAfter(b.start);

const getReadableMonth = (e) => e.start.format('MMMM');

const getEventsByMonth = (unsortedEvents) => {
  const futureEvents = unsortedEvents
      .filter(isAfterToday)
      .sort(descendingStartDate);

  const eventsByMonth = [];
  const months = [...new Set(futureEvents.map(getReadableMonth))];

  months.forEach((month) =>
    eventsByMonth.push({
      month: month,
      events: futureEvents.filter((event) => getReadableMonth(event) === month),
    }),
  );

  return eventsByMonth;
};

const parseEvents = (eventData) => {
  const activeEvents = eventData.filter(
      (event) => event.status !== 'cancelled',
  );

  const singleEvents = [];
  const recurringEvents = [];

  activeEvents.forEach(
      ({summary, start, end, description, recurrence, id}) => {
        const pluckedEvent = {summary, start, end, description, id, recurrence};
        pluckedEvent.start = moment(pluckedEvent.start.dateTime);
        pluckedEvent.end = moment(pluckedEvent.end.dateTime);

      pluckedEvent.recurrence ?
        recurringEvents.push(pluckedEvent) :
        singleEvents.push(pluckedEvent);
      },
  );

  const eventsByMonth = getEventsByMonth(singleEvents);

  return eventsByMonth;
};

export {parseEvents};
