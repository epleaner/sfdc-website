import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import EcoSattvaImage from '../../../static/images/ecosattva-image.jpg';

const useStyles = makeStyles({
  italic: {fontStyle: 'italic'},
  ecoSattvaImage: {
    width: '100%',
    height: '100%',
    maxWidth: '300px',
    maxHeight: '300px',
  },
});
const programLinks = [
  {
    text: 'Together at an Edge: A New EcoSattva Training',
    url:
      'https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117#opening',
  },
  {
    text: 'Overview of the Course',
    url:
      'https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117#overview',
  },
  {
    text: 'Who is this for?',
    url:
      'https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117#for',
  },
  {
    text: 'Who Will Be Teaching?',
    url:
      'https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117#teaching',
  },
  {
    text: 'How can I participate?',
    url:
      'https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117#participate',
  },
  {
    text: 'What’s the Schedule and Session Format?',
    url:
      'https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117#logistics',
  },
  {
    text: 'Will There be Any Live Sessions?',
    url:
      'https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117#live-sessions',
  },
  {
    text: 'I’m Interested. What do I do Next?',
    url:
      'https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117#next',
  },
  {
    text: 'How Can I Help?',
    url:
      'https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117#help',
  },
];

const FromOurFriends = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="From Our Friends"
        description="San Francisco Dharma Collective From Our Friends Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={4}>
            <Typography align="center" variant="h2" component="h1">
              Other Offerings from our Friends
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container component="article">
          <Grid item container xs={12} md={6}>
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant="h3" component="h2">
                  EcoSattva Training
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant="h4" component="h3">
                  An Online Course for Aspiring EcoSattvas
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={1}>
                <Typography variant="body1">
                  With the unprecedented uncertainty we are facing, many of us
                  are feeling on edge.
                </Typography>
              </Box>
              <Box mb={1}>
                <Typography variant="body1">
                  Humanity <em className="italic">is</em> at an edge, as is
                  Western Dharma. Each of us may be feeling on edge, even as we
                  all have different edges. But with the support of Dharma and
                  community, we can engage together at this edge.
                </Typography>
              </Box>
              <Box mb={1}>
                <Typography variant="body1">
                  This course is designed to support self-paced and
                  self-scheduled participation with shorter core session videos
                  and more resources for contemplation and interacting with one
                  another. Ideally experienced in small groups, either in-person
                  or online, you can start the six module course at any time and
                  move through at your own pace. Then join the monthly live
                  sessions to connect with the global community of registered
                  EcoSattvas in training, no matter where each is in the course.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="h4">
                Contents
              </Typography>
              <ul>
                {programLinks.map((link, index) => (
                  <li key={index}>
                    <Typography variant="body1">
                      <Link href={link.url}>{link.text}</Link>
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={6}>
            <Grid item container justify="center" xs={12}>
              <Box my={3}>
                <Avatar
                  className={classes.ecoSattvaImage}
                  src={EcoSattvaImage}
                  alt="Earth from space"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                This course is designed to meet participants in this
                unprecedented challenge with new insights from both the Dharma
                as well as the growing field of climate psychology. We will
                journey together to soothe and ultimately unbind our bodies,
                hearts and minds so that they can actively and creatively love
                this life. Deeply rooted, thoroughly engaged yet not dependent,
                we can express the most authentically helpful response to
                ecological crisis that is available to us.
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={12}>
              <Box my={3}>
                <Typography variant="h4" component="h5">
                  <Link href="https://oneearthsangha.org/programs/ecosattva-training/?utm_source=Sangha&utm_campaign=dc46d171d2-EST19_ANNOUNCE&utm_medium=email&utm_term=0_346c404fc8-dc46d171d2-182641077&mc_cid=dc46d171d2&mc_eid=dc81671117">
                    Find out more here
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default FromOurFriends;
