import {
  humanReadableDateTime,
  humanReadableRecurranceRules,
  humanReadableTime,
} from '../utils/eventParser';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  eventHeader: {
    'textTransform': 'none',
    '&:hover': {},
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
    linkableHash,
    copied,
    setCopied,
  } = props;

  const classes = useStyles();

  return (
    <Grid container onClick={toggleOpen} className={classes.eventHeader}>
      <Grid item container xs={10}>
        <Grid item xs={12}>
          <Typography align="left" variant="h5">
            {summary}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="left" variant="body2" color="textPrimary">
            {recurrenceRules ?
              `${humanReadableRecurranceRules(recurrenceRules)}
    ${humanReadableTime(start, end)}` :
              humanReadableDateTime(start, end)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justify="flex-end" xs={2}>
        <Grid item xs={6}>
          <Tooltip
            title={copied ? 'Copied!' : 'Copy link to event'}
            placement="top"
          >
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
              aria-label="copy"
            >
              <CopyToClipboard
                text={`${window.location.href.split('#')[0]}#${linkableHash}`}
                onCopy={(text, result) => {
                  setCopied(result);
                }}
              >
                <LinkIcon />
              </CopyToClipboard>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={6}>
          <IconButton aria-label="expand">
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventHeader;
