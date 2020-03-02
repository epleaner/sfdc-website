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

const formatRecurringEvents = (events) => {
  return events.map((event) => {
    const recurrenceValues = {};
    event.recurrence[0]
        .substring(6)
        .toLowerCase()
        .split(';')
        .map((ruleValueTuple) => [...ruleValueTuple.split('=')])
        .forEach(([rule, value]) => (recurrenceValues[rule] = value));

    event.recurrenceValues = recurrenceValues;
    return event;
  });
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

  const formattedRecurringEvents = formatRecurringEvents(recurringEvents);

  const activeRecurringEvents = formattedRecurringEvents.filter(
      ({recurrenceValues: {until}}) =>
        !until || moment(until.toUpperCase()).isAfter(moment().startOf('day')),
  );

  const eventsByMonth = getEventsByMonth(singleEvents);

  return {
    singleEventsByMonth: eventsByMonth,
    recurringEvents: activeRecurringEvents,
  };
};

const humanReadableRecurrance = (recurranceRules) => {
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
  humanReadableRecurrance,
  humanReadableDateTime,
  humanReadableTime,
};
