import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LotusImagePath from '../../../static/images/lotus.png';

const useStyles = makeStyles((theme) => ({
  lotusImage: {maxWidth: '500px', width: '100%', height: '100%'},
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="About Us"
        description="San Francisco Dharma Center About Page"
      />
      <Grid container>
        <Grid item container xs={12}>
          <Grid item container alignContent="center" xs={12} md={8}>
            <Grid item xs={12}>
              <Typography variant="h2">
                The San Francisco Dharma Collective is a sangha-led dharma
                community.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify="center" xs={12} md={4}>
            <Grid item>
              <img
                className={classes.lotusImage}
                src={LotusImagePath}
                alt="Lotus"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Box my={3}>
              <Typography variant="h3">Vision</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              A compassionate and awakened world where all beings are cared for,
              supported, and safe.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Box my={3}>
              <Typography variant="h3">Mission</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="body1">
                SFDC creates a welcoming and inclusive space for community,
                meditation, and transformation through diverse teachings and
                practices.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              The SF Dharma Collective makes a continuing effort to establish
              programming for groups outside the dominant culture who might
              otherwise not assume that their needs are seen or their selves are
              welcome. The SFDC invites affinity groups that wish to meet for
              the purpose of community, meditation, and studying dharma. Study
              groups formed for the purpose of examining privilege or unlearning
              bias through dharma-based practices are also welcomed here. Groups
              are open to self-identified members of the population for whom
              they are intended as well as supportive individuals (allies).
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Box my={3}>
              <Typography variant="h3">Join Us</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="body1">
                Join us by checking out a sit, volunteering and/or coming to a
                collective meeting, and help us turn our aspirations and yours
                into a durable community.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="body1">
                All classes and sits are open to all and no registration is
                necessary. We are supported by your generosity (dana). No one is
                ever turned away for lack of funds. SFDC is wheelchair
                accessible and has two accessible bathroom stalls. We use
                fragrance-free cleaning products.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="body1">
                Find us on{' '}
                <a href="https://www.facebook.com/SF-Dharma-Collective-281837899302952/">
                  Facebook
                </a>
                .
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Read{' '}
              <a href="https://drive.google.com/open?id=1ODYyXcCbeR7_4x7qN78gMHDt1XM7T_zx">
                meeting notes
              </a>{' '}
              in our Google drive.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Box my={3}>
              <Typography variant="h3">Our Location</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={3}>
              <Grid item xs={12} container>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    San Francisco Dharma Collective
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">2701 Folsom Street</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    San Francisco, CA 94110
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.537979505336!2d-122.41610668477435!3d37.75398197976332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f589b10caed%3A0x75f9d155a81c5872!2sSF%20Dharma%20Collective!5e0!3m2!1sen!2suk!4v1582538375324!5m2!1sen!2suk"
              frameBorder="0"
              style={{border: 0, width: '100%', height: '400px'}}
              allowFullScreen=""
              title="Google map of SFDC location"
            />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AboutUs;
