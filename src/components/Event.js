import React, {useState} from 'react';

import Card from '@material-ui/core/Card';
import EventBody from './EventBody';
import EventHeader from './EventHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ScrollableAnchor from 'react-scrollable-anchor';
import {makeStyles} from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  card: {
    'width': '100%',
    'padding': '0 20px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

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
  const [isHovered, setHovered] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const classes = useStyles();

  return (
    <ScrollableAnchor id={linkableHash}>
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
                  linkableHash,
                  copied,
                  setCopied,
                }}
              />
            }
            secondary={<EventBody {...{description, attachments, isOpen}} />}
          />
        </Card>
      </ListItem>
    </ScrollableAnchor>
  );
};

export default Event;
