import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Dog from '../content/dog.jpg'
import { Flex, Box, Text } from 'rebass'

const DogImage = styled.img`
  margin-top: 60px;
  width: 50%;
  height: auto;
`

const About = () => (
  <Layout>
    <Flex flexWrap="wrap">
      <Box mx="auto" pt={4} width={[1, 1 / 2, 1 / 2]}>
        <h3>About</h3>
        <Text p={2} pl={0} pr={3}>
          "Digital fabrication tools and the maker movement were my gateway
          drugs into web development. Coming from a background in furniture and
          product design, I've swapped my chisel for a text editor! <br /> To
          Kickstart my new career in software craftsmanship, in early 2017, I
          chose to study with General Assembly on their flagship 3 Month
          <a href="https://generalassemb.ly/education/web-development-immersive">
            Web Development Immersive course.
          </a>
          &nbsp;Since that incredible experience I have worked for a top&nbsp;
          <a href="http://www.wcrs.com/">agency</a> and SAAS product&nbsp;
          <a href="http://www.brandworkz.com/">company</a>
          &nbsp; building on my skill as developer. <br />
        </Text>
        <Text p={2}>
          Right now, I'm focused on learning JavaScript deeply alongside React,
          GraphQl & Node". <br />
          Apart from my love of startups and development, I also enjoy music,
          bikes, design + architecture
        </Text>
      </Box>
      <Box mx="auto" pt={4} width={[1, 1 / 2, 1 / 2]}>
        <Text p={3}>
          <iframe
            src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1E9EWmlVXojTmU"
            width="600"
            height="400"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </Text>
      </Box>
    </Flex>
  </Layout>
)

export default About
