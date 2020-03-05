import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import moment from 'moment';
import {
  humanReadableRecurranceRules,
  humanReadableDateTime,
  humanReadableTime,
} from '../utils/eventParser';

const useStyles = makeStyles((theme) => ({
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

  return (
    <ListItem key={id}>
      <ListItemText
        disableTypography
        primary={<Typography variant="h5">{summary}</Typography>}
        secondary={
          <Grid container>
            <Grid item xs={12}>
              <Typography component="span" variant="body2" color="textPrimary">
                {recurrenceRules ?
                  `${humanReadableRecurranceRules(recurrenceRules)}
                  ${humanReadableTime(start, end)}` :
                  humanReadableDateTime(start, end)}
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={12} sm={6} md={8}>
                <Typography
                  variant="body1"
                  component="div"
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
          </Grid>
        }
      />
    </ListItem>
  );
}
