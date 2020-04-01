import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  eventDescription: {
    'marginTop': theme.spacing(2),
    '& a': {
      'color': 'rgba(62,149,153,1)',
      'textDecoration': 'none',
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'auto',
      },
    },
  },
  eventDescriptionContainer: {
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },
  avatar: {
    width: '250px',
    height: '250px',
  },
  avatarContainer: {
    [theme.breakpoints.down('xs')]: {
      order: 0,
    },
  },
}));

const EventBody = (props) => {
  const {attachments, description} = props;

  const classes = useStyles();

  const descriptionWithModifiedAnchors = description.replace(
      /<a/g,
      `<a target='_blank' rel='noopener noreferrer'`,
  );

  return (
    <Grid item container xs={12}>
      <Grid
        item
        xs={12}
        sm={attachments ? 6 : 12}
        md={attachments ? 8 : 12}
        className={classes.eventDescriptionContainer}
      >
        <Box mb={4}>
          <Typography
            variant="body1"
            className={classes.eventDescription}
            dangerouslySetInnerHTML={{
              __html: `${descriptionWithModifiedAnchors || ''}`,
            }}
          />
        </Box>
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
  );
};

export default EventBody;
