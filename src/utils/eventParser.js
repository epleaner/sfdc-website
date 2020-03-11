import moment from 'moment';

const isAfterToday = (e) => e.start.isAfter(moment().startOf('day'));

const descendingStartDate = (a, b) => a.start.isAfter(b.start);

const getReadableMonth = (e) => e.start.format('MMMM');

const getFutureEvents = (events) =>
  events.filter(isAfterToday).sort(descendingStartDate);

const getEventsByMonth = (unsortedEvents) => {
  const futureEvents = getFutureEvents(unsortedEvents);

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

const formatRecurrenceRules = (events) => {
  return events.map((event) => {
    const recurrenceRules = {};
    event.recurrence[0]
        .substring(6)
        .toLowerCase()
        .split(';')
        .map((ruleTuple) => [...ruleTuple.split('=')])
        .forEach(([rule, value]) => (recurrenceRules[rule] = value));

    event.recurrenceRules = recurrenceRules;
    return event;
  });
};

const createSingleEventsFromRecurringEvents = ({
  recurringeEvents,
  monthsAhead,
}) => {
  const singleEvents = [];

  // recurringeEvents.forEach((event) => {});

  return singleEvents;
};

const parseEvents = (eventData) => {
  const activeEvents = eventData.filter(
      (event) => event.status !== 'cancelled' && event.description,
  );

  const unstickedEvents = activeEvents.filter(
      (event) => event.summary !== 'Morning Sit',
  );

  const singleEvents = [];
  const recurringEvents = [];

  unstickedEvents.forEach(
      ({id, summary, start, end, description, recurrence, attachments}) => {
        const pluckedEvent = {
          id,
          summary,
          start,
          end,
          description,
          recurrence,
          attachments,
        };

        pluckedEvent.start = moment(pluckedEvent.start.dateTime);
        pluckedEvent.end = moment(pluckedEvent.end.dateTime);

      pluckedEvent.recurrence ?
        recurringEvents.push(pluckedEvent) :
        singleEvents.push(pluckedEvent);
      },
  );

  const formattedRecurringEvents = formatRecurrenceRules(recurringEvents);

  const activeRecurringEvents = formattedRecurringEvents.filter(
      ({recurrenceRules: {until}}) =>
        !until || moment(until.toUpperCase()).isAfter(moment().startOf('day')),
  );

  const singleEventsFromRecurringEvents = createSingleEventsFromRecurringEvents(
      {recurringEvents: activeRecurringEvents, monthsAhead: 6},
  );

  const eventsByMonth = getEventsByMonth([
    ...singleEvents,
    ...singleEventsFromRecurringEvents,
  ]);

  return {
    singleEventsByMonth: eventsByMonth,
    recurringEvents: activeRecurringEvents,
  };
};

const humanReadableRecurranceRules = (recurranceRules) => {
  if (!recurranceRules.freq) return '';

  const daysOfWeekStrings = {
    mo: 'Monday',
    tu: 'Tuesday',
    we: 'Wednesday',
    th: 'Thursday',
    fr: 'Friday',
    sa: 'Saturday',
    su: 'Sunday',
  };

  const messageParts = [];
  let measure = '';

  if (recurranceRules.count) {
    messageParts.push(recurranceRules.count);
  } else messageParts.push('Every');

  const dayRules = recurranceRules.byday.split(',');

  if (dayRules.length > 1) {
    measure += dayRules.map((rule) => daysOfWeekStrings[rule]).join(', ');
  } else {
    const [full, ordinal, day] = recurranceRules.byday.match(/(-?\d)?([a-z]+)/);

    if (ordinal) {
      measure +=
        ordinal === '-1' ? 'last ' : `${moment.localeData().ordinal(ordinal)} `;
    }

    if (day) {
      measure += `${daysOfWeekStrings[day]}`;
    }
  }

  if (recurranceRules.count) measure += 's';

  messageParts.push(measure);

  if (recurranceRules.freq === 'monthly') messageParts.push('of the month');

  if (recurranceRules.until) {
    messageParts.push(
        `until ${moment(recurranceRules.until.toUpperCase())
            .add(1, 'months')
            .format('MMMM YYYY')}`,
    );
  }
  return messageParts.join(' ') + ', ';
};

const humanReadableDateTime = (start, end) =>
  `${start.format('dddd, MMMM Do, h:mma')} - ${end.format('h:mma')}`;

const humanReadableTime = (start, end) =>
  `${start.format('h:mma')} - ${end.format('h:mma')}`;

export {
  parseEvents,
  humanReadableRecurranceRules,
  humanReadableDateTime,
  humanReadableTime,
};
