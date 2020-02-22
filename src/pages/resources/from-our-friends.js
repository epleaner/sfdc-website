import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Grid from "@material-ui/core/Grid";

const Friends = () => {
  return (
    <Layout>
      <SEO
        title="Friends"
        description="San Francisco Dharma Collective Friends Page"
      />
      <Grid container />
    </Layout>
  );
};

export default Friends;
