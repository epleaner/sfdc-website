import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {
  humanReadableDateTime,
  humanReadableRecurranceRules,
  humanReadableTime,
} from '../../utils/eventParser';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

import EventHeaderText from './EventHeaderText';
import EventHeaderControls from './EventHeaderControls';

const useStyles = makeStyles((theme) => ({
  eventHeader: {
    textTransform: 'none',
    margin: `${theme.spacing(2)}px 0`,
  },
  icon: {
    'transition': 'all 0.25s ease-in-out',
    '&:hover': {color: theme.palette.primaryBlue4},
  },
}));

const EventHeader = (props) => {
  const {
    toggleOpen,
    isOpen,
    summary,
    recurrenceRules,
    start,
    end,
    eventUrl,
    copied,
    setCopied,
  } = props;

  const classes = useStyles();

  return (
    <Grid container onClick={toggleOpen} className={classes.eventHeader}>
      <EventHeaderText {...{summary, recurrenceRules, start, end}} />
      <EventHeaderControls {...{copied, setCopied, eventUrl, isOpen}} />
    </Grid>
  );
};

export default EventHeader;
