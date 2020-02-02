import React from 'react'

import Layout from '../components/layout'
import styled from 'styled-components'
import House from '../content/house.jpg'
import Icon from 'react-simple-icons'
import { Flex, Box, Text, Card, Image, Link } from 'rebass/styled-components'

const HouseImage = styled.img`
  margin-top: 60px;
  margin: 0 auto;
  width: 100%;
  height: auto;
`

const SocialWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const StyledUl = styled.ul`
  text-decoration: none;
  list-style-type: none;
`

const StyledLi = styled.li`
  text-decoration: none;
`

const H3 = styled.h3`
  font-family: 'Montserrat';
  fontsize: 2rem;
  text-align: center;
  margin-top: 2rem;
`

const linkStyle = {
  marginLeft: 20,
}

const Contact = () => (
  <Layout>
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

    <Flex>
      <Card width={[1]} mx="auto">
        <Image src={`${House}`} />
        <Link href="https://www.youtube.com/watch?v=pkKuRW5pYVI">
          <H3>The James Goldstein residence by John Lautner. </H3>
        </Link>
      </Card>
    </Flex>
  </Layout>
)

export default Contact
