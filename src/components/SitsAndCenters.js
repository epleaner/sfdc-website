import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: { margin: '0 5px' },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
});

const sitData = [
  {
    title: 'Jikoji Zen Center',
    body: [
      "Jikoji Zen Center is a jewel-box of a Soto Zen monastery. It's located next door to San José, in the foothills of Los Gatos, which are above San José. It is within the Penninsula Open Space Preserve.",
      "It was founded by Kobun Chino Otogawa Roshi in the 1970's. Suzuki Roshi brought Kobun Roshi to the US from Eiheiji  to help Suzuki Roshi start  the Practice at Tassajara and more.",
      'Jikoji offers weekly hybrid practice opportunities as well as day-long and longer retreats/Seshins. All teachings are held on a donation basis. All are welcomed there.',
      'Jikoji also makes its facilities available to Insight Meditation and other Buddhist groups/teachers who hold their retreats and day-longs there.',
    ],
    urls: ['https://www.jikoji.org/'],
  },
  {
    title: 'Floating Zendo',
    body: [
      'Founded decades ago by students of Kobun Chino Otogawa Roshi, the Floating Zendo offers an online weekly sit (with a Dharma talk by amazing teachers) on Tuesday evenings and a monthly in-person sit on a Saturday at the San José Friends House. Many of its students and teachers also train at Jikoji Zen Center.',
    ],
    urls: ['https://floatingzendo.org/'],
  },
  {
    title: 'Kannon Do Zen Center',
    body: [
      'The Kannon Do Zen Center is in Mountain View – nestled between Palo Alto and San Jose. Suzuki Roshi\'s early students founded "Haiku Zendo". Lead by Kobun Chino Otake, Haiko Zendo morphed from a home\'s garage in Los Altos into two centers:  Kannon Do Zen Center and Jikoji',
    ],
    urls: ['https://kannondo.org/'],
  }, //
  {
    title: 'Mission Dharma',
    body: [
      'Sangha led by Howarsd Cohn.',
      "St. John's Episcopal Church at the corner of 15th St and Julian",
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
      'mailto:sfpocsangha@gmail.com',
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
    urls: [
      'http://www.gaybuddhist.org',
      'http://facebook.com/gaybuddhistfellowship/',
    ],
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
    <Grid key={data.title} item container component='article' xs={12} sm={6}>
      <Box mb={4}>
        <Card className={classes.card}>
          <CardContent>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <Typography variant='h4' component='h1'>
                  {data.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ul>
                  {data.body.map((bodyText, bodyIndex) => (
                    <Typography
                      variant='body1'
                      component='li'
                      className={classes.listItem}
                      key={`${data.title}${bodyIndex}`}>
                      {bodyText}
                    </Typography>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12}>
                {data.urls.map((url, urlIndex) => (
                  <Typography key={`${data.title}${urlIndex}`} variant='body1'>
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      className={classes.anchor}
                      href={url}>
                      {url.replace(/mailto:/g, '')}
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
