import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import '../styles/fonts.css'
import Project1 from '../content/react-search.png'
import Project2 from '../content/ec-1-gallery.png'
import Project3 from '../content/omnifood1.png'
import Project4 from '../content/pinata.png'
import Project5 from '../content/mason-fifth.png'
import Project6 from '../content/andco.png'
import Avatar from '../content/fishing.png'
import Card from '../components/Card'
import { Flex, Box, Text } from 'rebass'
import Icon from 'react-simple-icons'

const linkStyle = {
  marginLeft: 20,
}

const TitleWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  & a {
    text-decoration: none;
  }
`

const IndexPage = () => (
  <Layout>
    <div className="portfolio">
      <div className="portfolio-hero">
        <img
          className="avatar-home"
          src={Avatar}
          style={{ width: 300 }}
          alt=""
        />
        <TitleWrapper>
          <h1 className="portfolio-hero-copy">
            Hello 👋 , I'm a fullstack developer at{' '}
            <a href="https://www.crowdform.co.uk/" target="blank">
              CrowdForm
            </a>{' '}
            An award winning digital product studio
          </h1>
          <h3 className="mb-60" style={{ fontWeight: 500 }}>
            Currenty enjoying JavaScript frameworks & tooling.
            <br /> React, Prisma, Apollo, GraphQl, NextJS & GatsbyJS
          </h3>
        </TitleWrapper>
      </div>
      <div className="row row-center">
        {/* <Card
          image={Project6}
          heading="AndCo"
          content="Co - working"
          Link1="https://www.andco.life/"
          Technology="#React #Node #ExpressJS #Mongoose"
        />
        <Card
          image={Project5}
          heading="Mason & Fifth"
          content="Co - Living"
          Link1="https://masonfifth.dev.crowdform.co.uk/"
          Technology="#React #ES6 #Jest #Styled System #Prisma #Apollo"
        /> */}
        <Card
          image={Project1}
          heading="Brandworkz"
          content="SAAS Brand management platform"
          Link1="https://www.brandworkz.com/"
          Link1Titile="GitHub"
          Technology="#React #ES6 #Jest #Bootstrap"
        />
        <Card
          image={Project2}
          heading="EC-1 Gallery"
          content="Contemporary gallery concept"
          Link1="https://brian-cooney.github.io/EC1/"
          Link1Titile="GitHub"
          Technology="#HTML5 #Bulma #jQuery"
        />
        <Card
          image={Project4}
          heading="Pinata"
          content="Collection of news API widgets"
          Link1="https://pinata-api-feed.herokuapp.com/"
          Link1Titile="GitHub"
          Technology="#AngularJS #Node #Express #Tachyons CSS"
        />

        <Card
          image={Project3}
          heading="Omnifood"
          content="Restaraunt marketing site"
          Link1="https://brian-cooney.github.io/omnifood-website"
          Link1Titile="GitHub"
          Technology="#HTML5 #CSS"
        />
      </div>
    </div>
    <Flex pt={4} pb={4} flexWrap="wrap">
      <Box mx="auto" px={0} py={0} width={[1, 1 / 4, 1 / 6, 1 / 6]}>
        <Text p={1} color="black">
          <Icon name="linkedin" />
          <a
            style={linkStyle}
            target="_blank"
            href="https://www.linkedin.com/in/bcooney88"
          >
            LinkedIn
          </a>
        </Text>
      </Box>
      <Box mx="auto" px={0} py={0} width={[1, 1 / 4, 1 / 6, 1 / 6]}>
        <Text p={1} color="black">
          <Icon name="github" />
          <a
            style={linkStyle}
            target="_blank"
            href="https://github.com/brian-cooney"
          >
            Github
          </a>
        </Text>
      </Box>
      <Box mx="auto" px={0} py={0} width={[1, 1 / 4, 1 / 6, 1 / 6]}>
        <Text p={1} color="black">
          <Icon name="twitter" />
          <a
            style={linkStyle}
            target="_blank"
            href="https://twitter.com/@bcooneydub"
          >
            Twitter
          </a>
        </Text>
      </Box>
      <Box mx="auto" px={0} py={0} width={[1, 1 / 4, 1 / 6, 1 / 6]}>
        <Text p={1} color="black">
          <Icon name="behance" />
          <a
            style={linkStyle}
            target="_blank"
            href="https://www.behance.net/briancooney"
          >
            Behance
          </a>
        </Text>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
