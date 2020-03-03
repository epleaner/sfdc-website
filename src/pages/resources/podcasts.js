import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  podcastDescription: {whiteSpace: 'pre-wrap'},
});

const podcastData = [
  {
    name: 'Aloka Vihara Forest Monastery',
    url: 'alokavihara.org/teaching/dhamma-talks/',
    author: 'The Aloka Vihara nuns ',
    description:
      'The Aloka Vihara nuns have streams and recorded dharma talks.',
  },
  {
    name: 'Buddhist Geeks ',
    url: 'http://www.buddhistgeeks.org',
    author: 'Vincent Horn',
    description:
      'The purpose of Buddhist Geeks is understood as an active exploration of Dharma in the Age of the Network.  How are the various networks that we\'re connected through changing how we practice Dharma?  How are they changing the human challenges that we\'re looking to different forms of dharma to help resolve?  What is Dharma in the Age of the Network?\n\nListen to our very own Kati\'s interview with Vincent about the formation of our collective: <a href=\'https://art19.com/shows/buddhist-geeks/episodes/578bd946-1d26-456e-912b-777471fae4be\'>The SF Dharma Collective / Buddhist Geeks</a>',
  },
  {
    name: 'Dave Smith Dharma',
    url:
      'https://itunes.apple.com/us/podcast/dave-smith-dharma/id1257410459?mt=2',
    author: '',
    description:
      'Talks and meditation instructions from Dave Smith, Dharma Teacher, Mindfulness Trainer, Secular Humanist, recovering buddhist. The Buddha is said to have taught one thing, suffering and the end of suffering. Dharma practice is a system of living that requires meditative training, ethical and compassionate actions and behaviors, and a wise understanding of the limitations of the human condition.',
  },
  {
    name: 'Dharma Seed',
    url: 'https://dharmaseed.org/talks/',
    author: '',
    description:
      'Dharma Seed is an online resource dedicated to making the Buddhist teachings of Insight Meditation and associated practices available to all.  There are THOUSANDS of  talks and meditations available through the Dharma Seed website.\n\nTeachers who have taught at SFDC whose talks appear on Dharma Seed include: <a href=\'https://dharmaseed.org/teacher/12/\'>Amma Thanasanti</a>, <a href=\'https://dharmaseed.org/teacher/379/\'>Ayya Anandabodhi</a>, <a href=\'https://dharmaseed.org/teacher/278/\'>Ayya Santacitta</a>, <a href=\'https://dharmaseed.org/talks/?search=carol+cano#\'>Carol Cano</a>, <a href=\'https://dharmaseed.org/teacher/82/\'>Howard Cohn</a>, <a href=\'https://dharmaseed.org/talks/?search=rivera\'>René Rivera</a>, <a href=\'https://dharmaseed.org/talks/?search=rivera\'>Fresh Lev White</a>',
  },
  {
    name: 'Deconstructing Yourself',
    url:
      'https://itunes.apple.com/us/podcast/deconstructing-yourself/id1240056193?mt=2',
    author: 'Michael Taft',
    description:
      'Dedicated to liberation in all its forms, Deconstructing Yourself is passionate about fearlessly investigating, attempting, and questioning all things to do with awakening, meditation, mindfulness, brain hacking, neurofeedback, and more. Deconstructing Yourself website at <a href=\'https://deconstructingyourself.com\'>https://deconstructingyourself.com</a>. ',
  },
  {
    name: 'Expanding Mind Podcast',
    url: 'https://techgnosis.com/category/podcast/',
    author: 'Erik Davis',
    description:
      'Erik Davis is an author, podcaster, award-winning journalist, and popular speaker based in San Francisco. He is probably best known for his book TechGnosis: Myth, Magic, and Mysticism in the Age of Information, a cult classic of visionary media studies that investigates how our fascination with technology intersects with the religious imagination. ',
  },
  {
    name: 'Lotus Underground',
    url: 'https://soundcloud.com/lotus-underground',
    author: 'Michael Owens',
    description:
      'Recordings of Michael Owens\' Dharma talks from the San Francisco Dharma Collective and beyond. Michael teachers a sutra study class every Sunday night, 7 - 8:30 pm, at SFDC.',
  },
  {
    name: 'SFDC Youtube Channel',
    url: 'https://www.youtube.com/channel/UCxrOXx3uqvfbYhs0A7twjSw',
    author: '',
    description:
      'We have our very own YouTube Channel with  recordings of events!',
  },
];

const Podcasts = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Podcasts"
        description="San Francisco Dharma Collective Podcasts Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={3}>
            <Typography align="center" variant="h2">
              Podcasts
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container>
          {podcastData.map((podcast, index) => (
            <Grid item xs={12} container key={index}>
              <Grid item xs={12}>
                <Box mb={2}>
                  <Typography variant="h6">
                    <a href={podcast.url}>{podcast.name}</a>
                    {podcast.author.length > 0 && ` with ${podcast.author}`}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className={classes.podcastDescription}
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: `${podcast.description}`,
                  }}
                />
              </Grid>
              {index + 1 !== podcastData.length && (
                <Grid item xs={12}>
                  <Box my={5}>
                    <Divider />
                  </Box>
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Podcasts;
