import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    width: '200px',
    height: '200px',
    margin: 'auto',
  },
  testimony: {
    whiteSpace: 'pre-wrap',
  },
});

const VolunteerTestimony = (props) => {
  const {volunteer} = props;
  const classes = useStyles();

  return (
    <Grid
      item
      container
      component="section"
      alignItems="center"
      key={volunteer.name}
      xs={12}
    >
      <Grid item xs={12} md={3}>
        <Avatar
          className={classes.avatar}
          src={volunteer.imgSrc}
          alt={volunteer.name}
        />
      </Grid>
      <Grid item container xs={12} md={9}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h4">
            {volunteer.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.testimony} variant="body1">
            {volunteer.testimony}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VolunteerTestimony;
