import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ConsciousHackingImagePath from '../../assets/images/consciousness-hacking.png';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import React from 'react';
import SEO from '../../components/SEO';
import Typography from '@material-ui/core/Typography';
import ZenHospiceImagePath from '../../assets/images/zen-hospice.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  description: {
    '& a': {
      color: 'rgba(62,149,153,1)',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  avatar: { width: '200px', height: '200px' },
});

const offeringsData = [
  {
    name: 'Zen Hospice Trainings',
    body:
      "Zen Hospice holds periodic trainings in our space. For more information, visit the <a href='https://www.zenhospice.org/education-training/mce/'>Zen Hospice Project</a>.",
    imgSrc: ZenHospiceImagePath,
  },
  {
    name: 'Consciousness Hacking',
    body:
      "<a href='https://www.facebook.com/consciousnesshackingbay'>Consciousness Hacking SF Bay Area</a> holds periodic events in our space.",
    imgSrc: ConsciousHackingImagePath,
  },
];
const Offerings = () => {
  const classes = useStyles();

  return (
    <>
      <SEO
        title='Other Offerings'
        description='San Francisco Dharma Collective Other Offerings Page'
      />
      <Layout>
        <Grid container>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography align='center' variant='h2' component='h1'>
                Other Offerings at SFDC
              </Typography>
            </Box>
          </Grid>
          {offeringsData.map((offering, index) => (
            <Box mb={8}>
              <Grid item xs={12} container key={index} component='article'>
                <Grid item container xs={12} sm={9}>
                  <Grid item container alignContent='flex-end' xs={12}>
                    <Grid item xs={12}>
                      <Box mb={2}>
                        <Typography variant='h4' component='h1'>
                          {offering.name}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Box mb={2}>
                      <Typography
                        className={classes.description}
                        variant='body1'
                        dangerouslySetInnerHTML={{
                          __html: `${offering.body.replace(
                            /<a/g,
                            `<a target='_blank' rel='noopener noreferrer'`
                          )}`,
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid item container justify='center' xs={12} sm={3}>
                  <Avatar
                    className={classes.avatar}
                    src={offering.imgSrc}
                    alt={offering.name}
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Layout>
    </>
  );
};

export default Offerings;
