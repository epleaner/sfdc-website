import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import ContentfulContentSectionFragment from '../graphql-fragments/ContentfulContentSectionFragment';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import DonateButton from './DonateButton';
import Venmo from './Venmo';
import ContentfulRichText from './ContentfulRichText';

const useStyles = makeStyles((theme) => ({
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
  divider: {
    backgroundColor: 'rgba(254,172,102,1)',
  },
}));

const CoronavirusUpdate = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      contentData: contentfulContentSection(
        title: { eq: "Coronavirus Update" }
      ) {
        ...ContentfulContentSectionFragment
      }
    }
  `);

  const {contentData} = data;

  return (
    <>
      <Divider className={classes.divider} />
      <Box my={8}>
        <Box mb={8}>
          <Typography variant="body1">
            <ContentfulRichText json={contentData.content.json} />
          </Typography>
        </Box>
        <Grid item xs={12} container justify="center">
          <DonateButton />
        </Grid>
        <Grid item xs={12} container justify="center">
          <Venmo />
        </Grid>
      </Box>
      <Divider className={classes.divider} />
    </>
  );
};

export default CoronavirusUpdate;
