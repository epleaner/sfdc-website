import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Teacher from '../../components/Teacher';

const Teachers = () => {
  const data = useStaticQuery(graphql`
    {
      teacherJson: contentfulTeacherList(name: { eq: "Current Teachers" }) {
        teacherData {
          name
          website
        }
        headshots {
          title
          fixed(width: 250, height: 250) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  `);

  const { teacherJson } = data;

  const sortedHeadshots = teacherJson.headshots.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const teacherDataWithHeadshots = sortedHeadshots.map(({ title, fixed }) => {
    const data = teacherJson.teacherData
      .filter(({ name }) => title === name)
      .pop();

    return { headshot: fixed, title: title, website: data && data.website };
  });

  return (
    <Layout>
      <SEO
        title='Teachers'
        description='San Francisco Dharma Collective Teachers Page'
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={3}>
            <Typography gutterBottom align='center' variant='h2' component='h1'>
              Our Teachers
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container justify='center'>
          {teacherDataWithHeadshots.map(({ headshot, title, website }) => (
            <Teacher
              key={title}
              name={title}
              website={website}
              headshot={headshot}
            />
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Teachers;
