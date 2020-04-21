import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

import {
  humanReadableDateTime,
  humanReadableRecurranceRules,
  humanReadableTime,
  urlFormattedSummary,
} from "../../utils/eventParser";

const useStyles = makeStyles({
  link: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "rgba(62,149,153,1)",
    },
  },
  recurringEventLink: {
    color: "rgba(62,149,153,1)",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default ({
  summary,
  recurrenceRules,
  start,
  end,
  big,
  eventUrl,
  recurringEventData,
}) => {
  const classes = useStyles();

  return (
    <Grid item container xs={big ? 12 : 10}>
      <Grid item xs={12}>
        <Typography align="left" variant={big ? "h3" : "h5"}>
          {big ? (
            summary
          ) : (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
              to={`/${eventUrl}`}
            >
              {summary}
            </Link>
          )}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="left" variant="body2" color="textPrimary">
          {recurrenceRules
            ? `${humanReadableRecurranceRules(recurrenceRules)}, 
${humanReadableTime(start, end)}`
            : humanReadableDateTime(start, end)}
        </Typography>
      </Grid>
      {recurringEventData && (
        <Grid item xs={12}>
          <Box mt={4}>
            <Typography align="left" variant="overline">
              This event is part of an ongoing series,{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className={`${classes.link} ${classes.recurringEventLink}`}
                to={`/events/r/${urlFormattedSummary(
                  recurringEventData.summary
                )}`}
              >
                {recurringEventData.summary}
              </Link>
              , happening{" "}
              {humanReadableRecurranceRules(recurringEventData.recurrenceRules)}
              .
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
