import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Grid from "@material-ui/core/Grid";

const Podcasts = () => {
  return (
    <Layout>
      <SEO
        title="Podcasts"
        description="San Francisco Dharma Collective Podcasts Page"
      />
      <Grid container />
    </Layout>
  );
};

export default Podcasts;
