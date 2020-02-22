import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Grid from "@material-ui/core/Grid";

const Teachers = () => {
  return (
    <Layout>
      <SEO
        title="Teachers"
        description="San Francisco Dharma Collective Teachers Page"
      />
      <Grid container />
    </Layout>
  );
};

export default Teachers;
