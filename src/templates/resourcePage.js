import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner';
import ContentfulRichText from '../components/ContentfulRichText';

const useStyles = makeStyles((theme) => ({
  section: {
    margin: `${theme.spacing(2)}px 0`,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  italic: { fontStyle: 'italic' },
  image: {
    width: '100%',
    height: '100%',
    maxWidth: '300px',
    maxHeight: '300px',
  },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
  offeringImage: {
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
  offeringBody: {
    [theme.breakpoints.up('md')]: {
      order: 0,
    },
  },
  bannerImageOrder: {
    [theme.breakpoints.down('md')]: {
      order: 0,
    },
    display: 'flex',
  },
  bannerImageContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  bannerText: {
    paddingRight: '30px',
    [theme.breakpoints.down('xs')]: {
      order: 1,
      paddingRight: '0px',
    },
  },
}));

export default ({ pageContext: { pageData } }) => {
  const classes = useStyles();

  return (
    <>
      <SEO title={pageData.title} description={pageData.subTitle} />
      <Layout>
        <Grid container>
          <Grid item container xs={12}>
            <Grid item container alignContent='center' xs={12}>
              <Grid item xs={12}>
                <Typography variant='h2' component='h1'>
                  {pageData.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignContent='center' xs={12}>
              <Grid item xs={12}>
                <Box mt={2} mb={4}>
                  <Typography variant='h4' component='h2'>
                    {pageData.subTitle}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {pageData && (
            <Box mb={10}>
              {pageData.infoBanners?.map((infoBanner) => {
                if (infoBanner.visible) {
                  return <Banner {...infoBanner} classes={classes} />;
                }
              })}
            </Box>
          )}
          {pageData.contentSections?.map((contentSection) => {
            return (
              <Grid
                key={contentSection.title}
                item
                xs={12}
                container
                component='article'>
                <Grid item xs={12}>
                  <Box my={2}>
                    <Typography variant='h3' component='h2'>
                      {contentSection.title}
                    </Typography>
                  </Box>
                </Grid>
                {contentSection.media && (
                  <Grid
                    item
                    container
                    xs={12}
                    md={4}
                    className={classes.offeringImage}>
                    {contentSection.media.map((media) => (
                      <Grid
                        item
                        container
                        justify='center'
                        xs={12}
                        key={media.id}>
                        <Avatar
                          className={classes.image}
                          src={media.file.url}
                          alt={media.description}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
                <Grid
                  item
                  xs={12}
                  md={contentSection.media ? 8 : 12}
                  className={classes.offeringBody}>
                  <Typography variant='body1' component='span'>
                    <ContentfulRichText json={contentSection.content.json} />
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Layout>
    </>
  );
};
