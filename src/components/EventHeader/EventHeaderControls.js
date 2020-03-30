import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    'transition': 'all 0.25s ease-in-out',
    '&:hover': {color: theme.palette.primaryBlue4},
  },
}));

export default (props) => {
  const {isOpen, eventUrl, copied, setCopied} = props;

  const classes = useStyles();

  return (
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
              text={`${window.location.href.split('#')[0]}event/${eventUrl}`}
              onCopy={(text, result) => {
                setCopied(result);
              }}
            >
              <LinkIcon className={classes.icon} />
            </CopyToClipboard>
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={6}>
        <Tooltip
          title={isOpen ? 'Hide details' : 'Show details'}
          placement="top"
        >
          <IconButton aria-label="expand">
            {isOpen ? (
              <ExpandLess className={classes.icon} />
            ) : (
              <ExpandMore className={classes.icon} />
            )}
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};
