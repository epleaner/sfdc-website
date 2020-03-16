import React, {useState} from 'react';
import {
  humanReadableDateTime,
  humanReadableRecurranceRules,
  humanReadableTime,
} from '../utils/eventParser';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  eventHeader: {
    textTransform: 'none',
  },
  eventDescription: {
    'marginTop': theme.spacing(2),
    '& a': {
      'color': 'rgba(62,149,153,1)',
      'textDecoration': 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  avatar: {
    width: '250px',
    height: '250px',
  },
  eventDescriptionContainer: {
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },
  avatarContainer: {
    [theme.breakpoints.down('xs')]: {
      order: 0,
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

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const descriptionWithModifiedAnchors = description.replace(
      /<a/g,
      `<a target='_blank' rel='noopener noreferrer'`,
  );

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItem key={id}>
      <ListItemText
        disableTypography
        primary={
          <Grid container>
            <Button
              fullWidth
              onClick={handleClick}
              className={classes.eventHeader}
            >
              <Grid item container xs={11}>
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
              <Grid item container justify="flex-end" xs={1}>
                <Grid item xs={12}>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        }
        secondary={
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid item container xs={12}>
              <Grid
                item
                xs={12}
                sm={attachments ? 6 : 12}
                md={attachments ? 8 : 12}
                className={classes.eventDescriptionContainer}
              >
                <Typography
                  variant="body1"
                  className={classes.eventDescription}
                  dangerouslySetInnerHTML={{
                    __html: `${descriptionWithModifiedAnchors || ''}`,
                  }}
                />
              </Grid>
              {attachments && (
                <Grid
                  item
                  container
                  xs={12}
                  sm={6}
                  md={4}
                  className={classes.avatarContainer}
                >
                  {attachments.map(({fileId, title}) => (
                    <Grid key={fileId} item container justify="center" xs={12}>
                      <Box my={2}>
                        <Avatar
                          className={classes.avatar}
                          alt={title}
                          src={`http://drive.google.com/uc?export=view&id=${fileId}`}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
          </Collapse>
        }
      />
    </ListItem>
  );
};

export default Event;
