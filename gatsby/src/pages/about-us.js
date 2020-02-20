import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LotusImagePath from '../../static/images/lotus.png'

const LotusImage = styled.img`
  max-width: 500px;
`

const AboutUs = () => {
  return (
    <Layout>
      <SEO title="About Us" description="About description goes here" />
      <Grid
        container
        css={css`
          padding: 0 95px;
        `}
      >
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justify="space-between"
        >
          <Grid item xs={8}>
            <Typography
              css={css`
                font-weight: 100;
              `}
              variant="h5"
            >
              The San Francisco Dharma Collective is a sangha-led dharma
              community.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <LotusImage src={LotusImagePath} alt="Lotus Image" />
          </Grid>
        </Grid>
        <Grid
          container
          css={css`
            padding-bottom: 40px;
          `}
        >
          <Grid item xs={12}>
            <Typography variant="h4">Vision</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              A compassionate and awakened world where all beings are cared for,
              supported, and safe.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          css={css`
            padding-bottom: 40px;
          `}
        >
          <Grid item xs={12}>
            <Typography variant="h4">Mission</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              SFDC creates a welcoming and inclusive space for community,
              meditation, and transformation through diverse teachings and
              practices.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            css={css`
              padding-bottom: 40px;
            `}
          >
            <Typography variant="subtitle1">
              Join us by checking out a sit, volunteering and/or coming to a
              collective meeting, and help us turn our aspirations and yours
              into a durable community.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            css={css`
              padding-bottom: 20px;
            `}
          >
            <Typography variant="subtitle2">
              All classes and sits are open to all and no registration is
              necessary. We are supported by your generosity (dana). No one is
              ever turned away for lack of funds. SFDC is wheelchair accessible
              and has two accessible bathroom stalls. We use fragrance-free
              cleaning products.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
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
      </Grid>
    </Layout>
  )
}

export default AboutUs
