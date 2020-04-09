import moment from "moment";

const isAfterToday = (e) => e.start.isAfter(moment().startOf("day"));

const descendingStartDate = (a, b) => a.start.isAfter(b.start);

const getReadableMonth = (e) => e.start.format("MMMM");

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
    .split(";")
    .map((ruleTuple) => [...ruleTuple.split("=")])
    .forEach(([rule, value]) => (recurrenceRules[rule] = value));

  return recurrenceRules;
};

const parseEvent = (event) => {
  event.start = moment(event.start.dateTime);
  event.end = moment(event.end.dateTime);

  if (event.recurrence) {
    event.recurrenceRules = formatRecurrenceRules(event.recurrence);
  }

  return event;
};

const filterCancelledAndEmptyEvents = (events) =>
  events.filter((event) => event.status !== "cancelled" && event.description);

const separateRecurringEvents = (events) => {
  const recurringEvents = [];
  const singleEvents = [];
  events.forEach((event) =>
    event.recurrence ? recurringEvents.push(event) : singleEvents.push(event)
  );

  return [recurringEvents, singleEvents];
};

const onlyActiveEvents = (events) =>
  events.filter((event) =>
    event.recurrenceRules
      ? recurringEventIsActive(event)
      : singleEventIsActive(event)
  );

const onlyActiveRecurringEvents = (events) =>
  events.filter(
    (event) => event.recurrenceRules && recurringEventIsActive(event)
  );

const recurringEventIsActive = (event) =>
  !event.recurrenceRules.until ||
  moment(event.recurrenceRules.until.toUpperCase()).isAfter(
    moment().startOf("day")
  );

const deduplicateEvents = (events) => {
  // assuming events are sorted by start date
  const toRemove = [];

  events.slice(1).forEach((event, index) => {
    if (event.start.diff(events[index].start) === 0) {
      if (event.recurringEventId) {
        toRemove.push(event);
        events[index].replacedRecurring = true;
      }
    }
  });

  const deduplicated = events.filter((e) => toRemove.indexOf(e) === -1);
  return deduplicated;
};

const singleEventIsActive = (event) =>
  event.start.isAfter(moment().startOf("day"));

const parseEvents = (eventData) => {
  const activeEvents = filterCancelledAndEmptyEvents(eventData);

  const unstickiedEvents = activeEvents.filter(
    (event) => event.summary !== "Morning Sit"
  );

  const parsedEvents = unstickiedEvents.map(parseEvent);

  const deduplicatedEvents = deduplicateEvents(parsedEvents);

  const eventsByMonth = getEventsByMonth(deduplicatedEvents);

  return {
    singleEventsByMonth: eventsByMonth,
  };
};

const parseQueriedEvent = (events, query, date) => {
  const parsedEvents = events.map(parseEvent);
  const activeEvents = onlyActiveEvents(parsedEvents);

  if (activeEvents.length > 1) {
    console.log(
      "Found more than one matching event, returning best guess",
      activeEvents,
      query,
      date
    );

    return activeEvents.filter(
      ({ summary, start, recurringEventId, recurrence, recurrenceRules }) => {
        // if event name equals url query
        if (formattedSummary(summary) === query) {
          // if wanting event on specific date (one-off event replacing recurring)
          if (date) {
            return !recurrence && start.format("M-D-YYYY") === date;
          }
          // this is hacky, for specific events that cause issues...
          if (recurrence && recurrenceRules.until) return false;

          return true;
        }

        return false;
      }
    )[0];
  }

  return activeEvents[0];
};

const formattedSummary = (summary) =>
  summary
    .trim()
    .toLowerCase()
    .replace(/[,\.:\(\)\-]+/g, " ")
    .replace(/\s+/g, " ");

const urlFormattedSummary = (summary) =>
  encodeURI(formattedSummary(summary).replace(/\s/g, "-"));

const humanReadableRecurranceRules = (recurranceRules) => {
  if (!recurranceRules.freq) return "";

  const daysOfWeekStrings = {
    mo: "Monday",
    tu: "Tuesday",
    we: "Wednesday",
    th: "Thursday",
    fr: "Friday",
    sa: "Saturday",
    su: "Sunday",
  };

  const messageParts = [];
  let measure = "";

  if (recurranceRules.count) {
    messageParts.push(recurranceRules.count);
  } else messageParts.push("Every");

  const dayRules = recurranceRules.byday.split(",");

  if (dayRules.length > 1) {
    measure += dayRules.map((rule) => daysOfWeekStrings[rule]).join(", ");
  } else {
    const [full, ordinal, day] = recurranceRules.byday.match(/(-?\d)?([a-z]+)/);

    if (ordinal) {
      measure +=
        ordinal === "-1" ? "last " : `${moment.localeData().ordinal(ordinal)} `;
    }

    if (day) {
      measure += `${daysOfWeekStrings[day]}`;
    }
  }

  if (recurranceRules.count) measure += "s";

  messageParts.push(measure);

  if (recurranceRules.freq === "monthly") messageParts.push("of the month");

  if (recurranceRules.until) {
    messageParts.push(
      `until ${moment(recurranceRules.until.toUpperCase())
        .add(1, "months")
        .format("MMMM YYYY")}`
    );
  }
  return messageParts.join(" ") + ", ";
};

const humanReadableDateTime = (start, end) =>
  `${start.format("dddd, MMMM Do, h:mma")} - ${end.format("h:mma")}`;

const humanReadableTime = (start, end) =>
  `${start.format("h:mma")} - ${end.format("h:mma")}`;

export {
  parseEvents,
  parseQueriedEvent,
  humanReadableRecurranceRules,
  humanReadableDateTime,
  humanReadableTime,
  urlFormattedSummary,
};
