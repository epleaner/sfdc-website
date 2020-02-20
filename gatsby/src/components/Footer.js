import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'

const Centered = styled.div`
  text-align: center;
`

const Address = styled.address`
  font-size: 0.8em;
`

const LinkText = styled.span`
  font-size: 1.5em;
`

const Footnote = styled.span`
  font-size: 0.8em;
`

const Footer = () => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Grid item xs={12} container direction="row" justify="center">
      <Grid
        css={css`
          padding-bottom: 25px;
        `}
        item
        xs={2}
      >
        <Centered>
          <Link to="/teachers">
            <LinkText>Teachers</LinkText>
          </Link>
        </Centered>
      </Grid>
      <Grid item xs={2}>
        <Centered>
          <Link to="/about-us">
            <LinkText>About Us</LinkText>
          </Link>
        </Centered>
      </Grid>
      <Grid item xs={2}>
        <Centered>
          <Link to="/donate">
            <LinkText>Donate</LinkText>
          </Link>
        </Centered>
      </Grid>
    </Grid>
    <Grid
      css={css`
        padding-bottom: 25px;
      `}
      item
      xs={12}
    >
      <Centered>
        <Address>
          <span>San Francisco Dharma Collective</span>
          <span> • </span>
          <span>2701 Folsom Street, San Francisco, CA 94110</span>
          <span> • </span>
          <span>415-404-9333</span>
          <span> • </span>
          <span>
            <a href="mailto:sfdharmacollective@gmail.com">
              sfdharmacollective@gmail.com
            </a>
          </span>
        </Address>
      </Centered>
    </Grid>
    <Grid item xs={12}>
      <Footnote>
        All classes and sits are open to all and no registration is necessary.
        We are supported by your generosity (dana). No one is ever turned away
        for lack of funds. SFDC is wheelchair accessible and has two accessible
        bathroom stalls. We use fragrance-free cleaning products.
      </Footnote>
    </Grid>
  </Grid>
)

export default Footer
