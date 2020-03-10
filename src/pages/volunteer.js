import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import VolunteerTestimonies from '../components/VolunteerTestimonies';
import HandsImagePath from '../assets/images/hands.png';

const useStyles = makeStyles({
  handsImage: {maxWidth: '500px', width: '100%', height: '100%'},
  currentVolunteerText: {fontSize: '0.9rem'},
});

const Volunteer = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Volunteer"
        description="San Francisco Dharma Center Volunteer Page"
      />
      <Grid container>
        <Grid item container xs={12}>
          <Typography
            align="center"
            gutterBottom
            className={classes.currentVolunteerText}
            variant="overline"
            component="aside"
          >
            Current volunteers: the{' '}
            <Link href="https://docs.google.com/spreadsheets/d/1rmWTnr84EGi30Vk4RvquNkMX4Zg_AjcrGfpe1uXeQoI/edit#gid=1161947904">
              volunteer hosting spreadsheet is here
            </Link>
            .
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item container alignContent="center" xs={12} md={8}>
            <Grid item xs={12}>
              <Box mb={6} mt={4}>
                <Typography align="center" variant="h2" component="h1">
                  Volunteer at your SF Dharma Collective.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant="body1">
                  Everything at SFDC happens because of our wonderful
                  volunteers. Volunteering is a powerful way to integrate your
                  practice into the world. It can foster a sense of purpose and
                  bring satisfaction and connect you to sangha, one of the three
                  jewels.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                SFDC invites YOU to volunteer! We are looking for volunteers to:
              </Typography>
              <ul>
                <Typography variant="body1" component="li">
                  host our classes / sits / teachers
                </Typography>
                <Typography variant="body1" component="li">
                  help with PR / Marketing / Social Media
                </Typography>
                <Typography variant="body1" component="li">
                  website development
                </Typography>
              </ul>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={4}>
            <Grid item xs={12}>
              <Box mb={3}>
                <img
                  className={classes.handsImage}
                  src={HandsImagePath}
                  alt="Hands"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant="body1">
                  Your generosity and kindness go a long way toward bringing the
                  dharma to all.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={4}>
                <Typography variant="body1">
                  If you are interested in volunteering, please contact{' '}
                  <Link href="mailto:SFDCvolunteers@gmail.com">
                    SFDCvolunteers@gmail.com
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container component="article" xs={12}>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography variant="h3" component="h2">
                Why we volunteer
              </Typography>
            </Box>
          </Grid>
          <Grid item container xs={12}>
            <VolunteerTestimonies />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Why do you volunteer?
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Volunteer;
