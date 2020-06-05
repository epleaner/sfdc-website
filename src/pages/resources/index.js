import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const useStyles = makeStyles({
  buttonContainer: {
    textAlign: 'left',
  },
  link: {
    color: 'inherit',
    textTransform: 'uppercase',
  },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  bigText: {
    fontSize: '1.3rem',
  },
});

const ResourceListItem = ({ title, subTitle, urlSlug, divider = true }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} container align='flex-start' key={title}>
      <Grid item xs={12} md={6}>
        <Link
          to={`/resources/${urlSlug ||
            title
              .toLowerCase()
              .split(' ')
              .join('-')}`}
          className={`${classes.anchor} ${classes.link}`}>
          <Typography variant='h2'>{title}</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} md={6} container alignItems='center'>
        <Typography variant='body1' className={classes.bigText}>
          {subTitle}
        </Typography>
      </Grid>
      {divider && (
        <Grid item xs={12}>
          <Box my={8}>
            <Divider />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

const Resources = () => {
  const { resourcePageData } = useStaticQuery(graphql`
    {
      resourcePageData: allContentfulResourcePage {
        edges {
          node {
            title
            page {
              subTitle
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title='Resources'
        description='San Francisco Dharma Collective Resources Page'
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={6}>
            <Typography align='center' variant='h3' component='h1'>
              In addition to our regular programming, we offer the following
              resources to our community:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container>
          {resourcePageData.edges.map(({ node }) => {
            return (
              <ResourceListItem
                title={node.title}
                subTitle={node.page.subTitle}
              />
            );
          })}
          <ResourceListItem
            title='Local Sits & Centers'
            subTitle='Other local places to study the Dharma.'
            urlSlug='local-centers'
          />
          <ResourceListItem
            title='Podcasts'
            subTitle='Our favorite sources for online Dharma, including offerings from
            our teachers.'
          />
          <ResourceListItem
            title='Other Offerings @ SFDC'
            subTitle='From Yoga to Ecstatic Dance to Consciousness Hacking'
            urlSlug='other-offerings'
            divider={false}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resources;
