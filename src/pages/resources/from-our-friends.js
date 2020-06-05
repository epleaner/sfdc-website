import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ContentfulRichText from '../../components/ContentfulRichText';

const useStyles = makeStyles((theme) => ({
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
}));

const FromOurFriends = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      pageData: contentfulPage(
        pageName: { eq: "Other Offerings from our Friends" }
      ) {
        ...ContentfulPageFragment
      }
    }
  `);

  const { pageData } = data;

  return (
    <Layout>
      <SEO
        title={pageData.title}
        description={`${pageData.title}. At the San Francisco Dharma Center.`}
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={4}>
            <Typography align='center' variant='h2' component='h1'>
              {pageData.title}
            </Typography>
          </Box>
        </Grid>
        {pageData.contentSections.map((contentSection) => {
          return (
            <Grid
              key={contentSection.id}
              item
              xs={12}
              container
              component='article'
            >
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
                  className={classes.offeringImage}
                >
                  {contentSection.media.map((media) => (
                    <Grid item container justify='center' xs={12}>
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
                className={classes.offeringBody}
              >
                <ContentfulRichText json={contentSection.content.json} />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

export default FromOurFriends;
