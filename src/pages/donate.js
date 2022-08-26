import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Grid from '@material-ui/core/Grid';

import DonateComponent from '../components/HomePage/Donate';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Donate = () => {
  const { pageData } = useStaticQuery(graphql`
    {
      pageData: contentfulPage(pageName: { eq: "Donate" }) {
        ...ContentfulPageFragment
      }
    }
  `);

  return (
    <>
      <SEO
        title={pageData.title}
        description='Donate to the San Francisco Dharma Collective.'
      />
      <Layout>
        <Grid container>
          <Grid item xs={12}>
            <DonateComponent />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Donate;
