import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import moment from 'moment';
import {
  humanReadableRecurranceRules,
  humanReadableDateTime,
  humanReadableTime,
} from '../utils/eventParser';

const useStyles = makeStyles((theme) => ({
  eventHeader: {
    textTransform: 'none',
  },
  eventDescription: {
    marginTop: theme.spacing(2),
  },
  avatar: {
    width: '250px',
    height: '250px',
  },
}));

export default function Event(props) {
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
              >
                <Typography
                  variant="body1"
                  className={classes.eventDescription}
                  dangerouslySetInnerHTML={{
                    __html: `${description || ''}`,
                  }}
                />
              </Grid>
              {attachments && (
                <Grid item container xs={12} sm={6} md={4}>
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
}
