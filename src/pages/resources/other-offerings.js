import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import ConsciousHackingImagePath from '../../assets/consciousness-hacking.png';
import ZenHospiceImagePath from '../../assets/zen-hospice.jpg';

const useStyles = makeStyles({avatar: {width: '200px', height: '200px'}});

const offeringsData = [
  {
    name: 'Zen Hospice Trainings',
    body:
      'Zen Hospice holds periodic trainings in our space. For more information, visit the <a href=\'https://www.zenhospice.org/education-training/mce/\'>Zen Hospice Project</a>.',
    imgSrc: ZenHospiceImagePath,
  },
  {
    name: 'Consciousness Hacking',
    body:
      '<a href=\'https://www.facebook.com/consciousnesshackingbay\'>Consciousness Hacking SF Bay Area</a> holds periodic events in our space.',
    imgSrc: ConsciousHackingImagePath,
  },
];
const Offerings = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Other Offerings"
        description="San Francisco Dharma Collective Other Offerings Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={4}>
            <Typography align="center" variant="h2" component="h1">
              Other Offerings at 2701 Folsom
            </Typography>
          </Box>
        </Grid>
        {offeringsData.map((offering, index) => (
          <Grid item xs={12} container key={index} component="article">
            <Grid item container xs={12} sm={9}>
              <Grid item container alignContent="flex-end" xs={12}>
                <Grid item xs={12}>
                  <Box mb={2}>
                    <Typography variant="h4" component="h1">
                      {offering.name}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box mb={2}>
                  <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{__html: `${offering.body}`}}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item container justify="center" xs={12} sm={3}>
              <Avatar
                className={classes.avatar}
                src={offering.imgSrc}
                alt={offering.name}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Offerings;
