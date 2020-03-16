import Link from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginBottom: theme.spacing(2),
  },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
}));
const otherSitsData = [
  {
    url: 'https://www.abhayagiri.org/',
    name: 'Abhayagiri Buddhist Monastery',
    location: '',
  },
  {url: 'https://alokavihara.org/', name: 'Aloka Vihara', location: ''},
  {
    url: 'https://coastsidevipassana.org/',
    name: 'Coastside Vipassana',
    location: 'Montara',
  },
  {
    url: 'https://eastbaymeditation.org',
    name: 'East Bay Meditation Center',
    location: 'Oakland',
  },
  {
    url: 'http://www.insightmeditationcenter.org/',
    name: 'Insight Meditation Center',
    location: 'Redwood City',
  },
  {
    url: 'https://www.imsb.org/',
    name: 'Insight Meditation South Bay with Shaila Catherine',
    location: '',
  },
  {
    url: 'https://www.insightsantacruz.org/',
    name: 'Insight Santa Cruz',
    location: 'Santa Cruz',
  },
  {
    url: 'https://sfbuddhistcenter.org',
    name: 'San Francisco Buddhist Center',
    location: 'San Francisco',
  },
  {
    url: 'http://www.spiritrock.org/',
    name: 'Spirit Rock Meditation Center',
    location: 'Marin County',
  },
  {
    url: 'http://www.sfzc.org/',
    name: 'San Francisco Zen Center',
    location: 'San Francisco, Green Gulch, and Tassajara',
  },
  {
    url: 'https://www.sanjoseinsight.org/',
    name: 'San Jose Sangha',
    location: 'San Jose',
  },
  {
    url: 'Tathagata Meditation Center',
    name: 'Tathagata Meditation Center',
    location: 'San Jose',
  },
];

const OtherSits = () => {
  const classes = useStyles();

  return (
    <ul>
      {otherSitsData.map((sit) => (
        <Typography
          key={sit.name}
          variant="body1"
          component="li"
          className={classes.listItem}
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className={classes.anchor}
            href={sit.url}
          >
            {sit.name}
          </Link>
          {sit.location.length > 0 && ` (${sit.location})`}
        </Typography>
      ))}
    </ul>
  );
};

export default OtherSits;
