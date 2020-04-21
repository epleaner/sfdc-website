import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CollapsableEventBody from "./EventBody/CollapsableEventBody";
import EventHeader from "./EventHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { urlFormattedSummary } from "../utils/eventParser";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    padding: "0 20px",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Event = (props) => {
  const {
    summary,
    start,
    end,
    description,
    recurrenceRules,
    attachments,
  } = props;

  let urlEncodedSummary =
    urlFormattedSummary(summary) + `/${start.format("M-D-YYYY")}`;

  const eventUrl = `events/${urlEncodedSummary}`;

  const [isOpen, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [isHovered, setHovered] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const classes = useStyles();

  return (
    <ListItem onMouseLeave={() => setCopied(false)}>
      <Card
        className={classes.card}
        raised={isHovered}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ListItemText
          disableTypography
          primary={
            <EventHeader
              {...{
                toggleOpen,
                isOpen,
                summary,
                recurrenceRules,
                start,
                end,
                eventUrl,
                copied,
                setCopied,
              }}
            />
          }
          secondary={
            <CollapsableEventBody {...{ description, attachments, isOpen }} />
          }
        />
      </Card>
    </ListItem>
  );
};

export default Event;
