import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const AboutUs = () => {
  return (
    <Layout>
      <SEO title="About Us" description="About description goes here" />
      <Container>
        <PageTitle>About Us</PageTitle>
      </Container>
    </Layout>
  )
}

export default AboutUs
