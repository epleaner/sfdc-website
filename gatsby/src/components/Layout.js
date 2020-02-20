import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { globalStyles } from '../styles/globalStyles.js'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
  background: ${props => props.theme.colors.background};
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Layout = props => {
  return (
    <Root className="siteRoot">
      <Container>
        <Skip href="#main" id="skip-navigation">
          Skip to content
        </Skip>
        <Header />
        <div id="main">{props.children}</div>
        <Footer />
        <Global styles={globalStyles} />
      </Container>
    </Root>
  )
}

export default Layout
