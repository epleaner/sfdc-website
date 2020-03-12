import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {margin: '0 5px'},
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
});

const sitData = [
  {
    title: 'Mission Dharma',
    body: [
      'Sangha led by Howarsd Cohn.',
      'St. John\'s Episcopal Church at the corner of 15th St and Julian',
      'Tuesdays  7:00 - 8:30 pm',
    ],
    urls: ['http://www.missiondharma.org/'],
  },
  {
    title: 'San Francisco People of Color Insight Meditation Sangha',
    body: [
      'Wednesdays 6:00-7:30 p.m.',
      'Mission Language & Vocational School, 2929 19th St, San Francisco',
      'Follow @SFPOCInsightsangha',
    ],
    urls: [
      'http://sfpocsangha@gmail.com',
      'http://facebook.com/SFPOCInsightSangha/',
    ],
  },
  {
    title: 'San Francisco Insight Meditation Community',
    body: [
      'Sunday evenings are led by Eugene Cash or a guest teacher, and Wednesday evenings are led by Pamela Weiss or a guest teacher. ',
      'Sundays, 7pm to 9pm in the Chapel',
      'Wednesdays,  7pm to 9pm in the Fireside Room',
      'First Unitarian Universalist Church of San Francisco, 1187 Franklin Street at the corner of Geary Blvd. ',
    ],
    urls: ['https://www.sfinsight.org/'],
  },
  {
    title: 'Gay Buddhist Fellowship',
    body: [
      'The Gay Buddhist Fellowship supports Buddhist practice in the Gay men’s community. It is a forum that brings together the diverse Buddhist traditions to address the spiritual concerns of Gay men in the San Francisco Bay Area, the United States, and the world. GBF’s mission includes cultivating a social environment that is inclusive and caring.',
      'Sunday, 10:30am - 12:30pm',
      'Weekly rotating teachers',
      '30 minute silent meditation followed by Dharma talk by guest teachers and social time',
      'SF Buddhist Center, 37 Bartlett St., San Francisco',
    ],
    urls: ['www.gaybuddhist.org', 'http://facebook.com/gaybuddhistfellowship/'],
  },
  {
    title: 'Insight Upper Market',
    body: [
      'Mondays, 6:00 pm -7:15 pm',
      'Guiding Teacher: John Martin',
      'Spark Arts, 4229 18th St, SF',
    ],
    urls: ['http://insightuppermarket.org/'],
  },
];

const SitsAndCenters = () => {
  const classes = useStyles();

  return sitData.map((data) => (
    <Grid key={data.title} item container component="article" xs={12} sm={6}>
      <Box mb={4}>
        <Card className={classes.card}>
          <CardContent>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <Typography variant="h4" component="h1">
                  {data.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ul>
                  {data.body.map((bodyText, bodyIndex) => (
                    <Typography
                      variant="body1"
                      component="li"
                      className={classes.listItem}
                      key={`${data.title}${bodyIndex}`}
                    >
                      {bodyText}
                    </Typography>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12}>
                {data.urls.map((url, urlIndex) => (
                  <Typography key={`${data.title}${urlIndex}`} variant="body1">
                    <Link className={classes.anchor} href={url}>
                      {url}
                    </Link>
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  ));
};

export default SitsAndCenters;
