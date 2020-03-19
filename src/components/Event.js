import React, {useState} from 'react';

import EventBody from './EventBody';
import EventHeader from './EventHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ScrollableAnchor from 'react-scrollable-anchor';
import moment from 'moment';

const Event = (props) => {
  const {
    id,
    summary,
    start,
    end,
    description,
    recurrenceRules,
    attachments,
  } = props;

  const hashFormattedStartDate = moment(start)
      .format('l')
      .replace(/\//g, '-');

  const hashFormattedSummary = summary
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\ ]/g, '')
      .replace(/\ +/g, '-');

  const linkableHash = `${hashFormattedSummary}-${hashFormattedStartDate}`;

  let hashLinked = false;
  if (window.location.hash.substring(1) === linkableHash) hashLinked = true;

  const [isOpen, setOpen] = React.useState(hashLinked);
  const [copied, setCopied] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <ScrollableAnchor id={linkableHash}>
      <ListItem onMouseLeave={() => setCopied(false)}>
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
                linkableHash,
                copied,
                setCopied,
              }}
            />
          }
          secondary={<EventBody {...{description, attachments, isOpen}} />}
        />
      </ListItem>
    </ScrollableAnchor>
  );
};

export default Event;
