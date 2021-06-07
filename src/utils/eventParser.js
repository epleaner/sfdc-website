import moment from 'moment';

const isAfterToday = (e) => e.start.isAfter(moment().startOf('day'));

const descendingStartDate = (a, b) => a.start.isAfter(b.start);

const getReadableMonth = (e) => e.start.format('MMMM');

const filterCancelledAndEmptyEvents = (events) =>
  events.filter((event) => event.status !== 'cancelled' && event.description);

const filterOnlyActiveEvents = (events) =>
  events.filter((event) =>
    event.recurrenceRules
      ? recurringEventIsActive(event)
      : singleEventIsActive(event)
  );

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
    })
  );

  return eventsByMonth;
};

const formatRecurrenceRules = (recurrence) => {
  const recurrenceRules = {};
  recurrence[0]
    .substring(6)
    .toLowerCase()
    .split(';')
    .map((ruleTuple) => [...ruleTuple.split('=')])
    .forEach(([rule, value]) => (recurrenceRules[rule] = value));

  return recurrenceRules;
};

const parseEvent = (event) => {
  if (event.status !== 'cancelled') {
    event.start = moment(event.start.dateTime);
    event.end = moment(event.end.dateTime);

    if (event.recurrence) {
      event.recurrenceRules = formatRecurrenceRules(event.recurrence);
    }
  }

  return event;
};

const recurringEventIsActive = (event) =>
  !event.recurrenceRules.until ||
  moment(event.recurrenceRules.until.toUpperCase()).isAfter(
    moment().startOf('day')
  );

const deduplicateEvents = (events) => {
  // assuming events are sorted by start date
  const toRemove = [];
  events.slice(1).forEach((event, index) => {
    if (
      event.start.diff(events[index].start) === 0 &&
      event.recurringEventId &&
      event.summary === events[index].summary
    ) {
      toRemove.push(event);
      events[index].replacedRecurring = true;
    }
  });

  const deduplicated = events.filter((e) => toRemove.indexOf(e) === -1);
  return deduplicated;
};

const singleEventIsActive = (event) =>
  event.start.isAfter(moment().startOf('day'));

const parseEvents = (eventData) => {
  const activeEvents = filterCancelledAndEmptyEvents(eventData);

  const unstickiedEvents = activeEvents.filter(
    (event) => event.summary !== 'Morning Sit'
  );

  const parsedEvents = unstickiedEvents.map(parseEvent);

  const deduplicatedEvents = deduplicateEvents(parsedEvents);

  const eventsByMonth = getEventsByMonth(deduplicatedEvents);

  return {
    singleEventsByMonth: eventsByMonth,
  };
};

const parseQueriedEvent = (events, queryParams) => {
  const { name, date, recurring } = queryParams;

  const filteredEvents = filterCancelledAndEmptyEvents(events);
  const parsedEvents = filteredEvents.map(parseEvent);
  const activeEvents = filterOnlyActiveEvents(parsedEvents);

  if (activeEvents.length > 1) {
    // console.log(
    //   'Found more than one matching event, returning best guess',
    //   activeEvents,
    //   queryParams
    // );

    const eventsWithMatchingSummary = activeEvents.filter(
      ({ summary }) => formattedSummary(summary) === name
    );

    if (eventsWithMatchingSummary.length === 1)
      return eventsWithMatchingSummary[0];

    const eventsWithMatchingSummaryAndDates = eventsWithMatchingSummary.filter(
      ({ start, recurrenceRules }) =>
        date ? start.format('M-D-YYYY') === date : recurrenceRules
    );

    if (eventsWithMatchingSummaryAndDates.length === 1)
      return eventsWithMatchingSummaryAndDates[0];

    const eventsWithOpenEndedRecurrence = eventsWithMatchingSummaryAndDates.filter(
      ({ recurrenceRules }) => !recurrenceRules.until
    );

    if (eventsWithOpenEndedRecurrence.length > 0)
      return eventsWithOpenEndedRecurrence[0];
    return eventsWithMatchingSummaryAndDates[0];
  }

  return activeEvents[0];
};

const formattedSummary = (summary) =>
  summary
    .trim()
    .toLowerCase()
    .replace(/[,\.:\(\)\-]+/g, ' ')
    .replace(/\s+/g, ' ');

const urlFormattedSummary = (summary) =>
  encodeURI(formattedSummary(summary).replace(/\s/g, '-'));

const toTitleCase = (text) =>
  text
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

const humanReadableRecurranceRules = (recurranceRules) => {
  if (!recurranceRules.freq) return '';

  const daysOfWeek = {
    mo: { text: 'Monday', order: 0 },
    tu: { text: 'Tuesday', order: 1 },
    we: { text: 'Wednesday', order: 2 },
    th: { text: 'Thursday', order: 3 },
    fr: { text: 'Friday', order: 4 },
    sa: { text: 'Saturday', order: 5 },
    su: { text: 'Sunday', order: 6 },
  };

  const messageParts = [];
  let measure = '';

  if (recurranceRules.count) {
    messageParts.push(recurranceRules.count);
  } else messageParts.push('Every');

  const dayRules = recurranceRules.byday.split(',');

  if (dayRules.length > 1) {
    measure += dayRules
      .sort((a, b) => daysOfWeek[a].order > daysOfWeek[b].order)
      .map((rule) => daysOfWeek[rule].text)
      .join(', ');
  } else {
    const [full, ordinal, day] = recurranceRules.byday.match(/(-?\d)?([a-z]+)/);

    if (ordinal) {
      measure +=
        ordinal === '-1' ? 'last ' : `${moment.localeData().ordinal(ordinal)} `;
    }

    if (day) {
      measure += `${daysOfWeek[day].text}`;
    }
  }

  if (recurranceRules.count) measure += 's';

  messageParts.push(measure);

  if (recurranceRules.freq === 'monthly') messageParts.push('of the month');

  if (recurranceRules.until) {
    messageParts.push(
      `until ${moment(recurranceRules.until.toUpperCase())
        .add(1, 'months')
        .format('MMMM YYYY')}`
    );
  }
  return messageParts.join(' ');
};

const getTimeZone = (e) => {
  const dtf = Intl.DateTimeFormat(undefined, { timeZoneName: 'short' });
  return dtf.formatToParts(e).find((part) => part.type == 'timeZoneName').value;
};

const humanReadableDateTime = (start, end) => {
  `${start.local().format('dddd, MMMM Do, h:mma')} - ${end
    .local()
    .format('h:mma')} ${getTimeZone(end.local())}`;
};

const humanReadableTime = (start, end) =>
  `${start.local().format('h:mma')} - ${end
    .local()
    .format('h:mma')} ${getTimeZone(end.local())}`;

export {
  parseEvent,
  parseEvents,
  parseQueriedEvent,
  humanReadableRecurranceRules,
  humanReadableDateTime,
  humanReadableTime,
  urlFormattedSummary,
  toTitleCase,
};
