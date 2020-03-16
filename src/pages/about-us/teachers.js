import {graphql, useStaticQuery} from 'gatsby';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';
import Layout from '../../components/Layout';
import React from 'react';
import SEO from '../../components/SEO';
import Teacher from '../../components/Teacher';
import Typography from '@material-ui/core/Typography';

const Teachers = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "images/teachers" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 250) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const imageEdges = data.allFile.edges;

  return (
    <Layout>
      <SEO
        title="Teachers"
        description="San Francisco Dharma Collective Teachers Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={3}>
            <Typography gutterBottom align="center" variant="h2" component="h1">
              Our Teachers
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container justify="center">
          {imageEdges
              .sort((a, b) =>
                a.node.childImageSharp.fluid.originalName.localeCompare(
                    b.node.childImageSharp.fluid.originalName,
                ),
              )
              .map((edge) => (
                <Teacher
                  key={edge.node.childImageSharp.fluid.originalName}
                  fluidImage={edge.node.childImageSharp.fluid}
                />
              ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Teachers;
