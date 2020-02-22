import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Grid from "@material-ui/core/Grid";

const Newsletter = () => {
  return (
    <Layout>
      <SEO
        title="Newsletter"
        description="San Francisco Dharma Collective Newsletter Page"
      />
      <Grid container />
    </Layout>
  );
};

export default Newsletter;
