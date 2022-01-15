import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import HandsImagePath from '../../assets/images/hands.png';
import Link from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  handsImage: { maxWidth: '500px', width: '100%', height: '100%' },
  currentVolunteerText: { fontSize: '0.9rem' },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
});

const Volunteer = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={12}>
      <Grid item container alignContent='center' xs={12} md={8}>
        <Grid item xs={12}>
          <Box mb={6} mt={4}>
            <Typography align='center' variant='h2' component='h1'>
              Volunteer at your SF Dharma Collective.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={2}>
            <Typography variant='body1'>
              Everything at SFDC happens because of our wonderful volunteers.
              Volunteering is a powerful way to integrate your practice into the
              world. It can foster a sense of purpose and bring satisfaction and
              connect you to sangha, one of the three jewels.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={2}>
            <Typography variant='body1'>
              Your generosity and kindness go a long way toward bringing the
              dharma to all.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={4}>
            <Typography variant='body1'>
              If you are interested in volunteering, please contact{' '}
              <Link
                target='_blank'
                rel='noopener noreferrer'
                className={classes.anchor}
                href='mailto:SFDCvolunteers@gmail.com'>
                SFDCvolunteers@gmail.com
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} container alignItems='center' justify='center'>
        <Box>
          <img
            className={classes.handsImage}
            src={HandsImagePath}
            alt='Hands'
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Volunteer;
