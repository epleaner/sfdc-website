import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import React from 'react';
import SEO from '../../components/SEO';
import Teacher from '../../components/Teacher';
import Typography from '@material-ui/core/Typography';

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
          {teacherJson.headshots
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(({ title, fixed }) => {
              const data = teacherJson.teacherData
                .filter(({ name }) => title === name)
                .pop();

              return (
                <Teacher
                  key={title}
                  name={title}
                  website={data && data.website}
                  fixedImage={fixed}
                />
              );
            })}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Teachers;
