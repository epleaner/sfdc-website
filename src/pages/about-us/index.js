import React from "react";
import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LotusImagePath from "../../../static/images/lotus.png";

const LotusImage = styled.img`
  max-width: 500px;
`;

const AboutUs = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="San Francisco Dharma Center About Page"
      />
      <Grid container spacing={6}>
        <Grid item container xs={12}>
          <Grid item container alignContent="center" xs={12} md={8}>
            <Grid item xs={12}>
              <Typography variant="h2">
                The San Francisco Dharma Collective is a sangha-led dharma
                community.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify="center" xs={12} md={4}>
            <Grid item>
              <LotusImage src={LotusImagePath} alt="Lotus Image" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Typography paragraph={true} variant="h3">
              Vision
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              A compassionate and awakened world where all beings are cared for,
              supported, and safe.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Typography paragraph={true} variant="h3">
              Mission
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph={true} variant="body1">
              SFDC creates a welcoming and inclusive space for community,
              meditation, and transformation through diverse teachings and
              practices.
            </Typography>
            <Typography paragraph={true} variant="body1">
              The SF Dharma Collective makes a continuing effort to establish
              programming for groups outside the dominant culture who might
              otherwise not assume that their needs are seen or their selves are
              welcome. The SFDC invites affinity groups that wish to meet for
              the purpose of community, meditation, and studying dharma. Study
              groups formed for the purpose of examining privilege or unlearning
              bias through dharma-based practices are also welcomed here. Groups
              are open to self-identified members of the population for whom
              they are intended as well as supportive individuals (allies).
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Typography paragraph={true} variant="h3">
              Join Us
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph={true} variant="body1">
              Join us by checking out a sit, volunteering and/or coming to a
              collective meeting, and help us turn our aspirations and yours
              into a durable community.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph={true} variant="body1">
              All classes and sits are open to all and no registration is
              necessary. We are supported by your generosity (dana). No one is
              ever turned away for lack of funds. SFDC is wheelchair accessible
              and has two accessible bathroom stalls. We use fragrance-free
              cleaning products.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AboutUs;
