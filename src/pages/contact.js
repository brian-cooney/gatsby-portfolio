import React from 'react'

import Layout from '../components/layout'
import styled from 'styled-components'
import House from '../content/house.jpg'
import Icon from 'react-simple-icons'
import { Flex, Box, Text, Card, Heading, Link } from 'rebass'

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

    <Card
      p={4}
      py={7}
      backgroundImage={`url(${House})`}
      backgroundSize="cover"
      borderRadius={8}
      color="white"
      bg="darkgray"
    >
      <Heading textAlign="center" fontSize={[5, 6]}>
        Contact Me
      </Heading>
    </Card>
  </Layout>
)

export default Contact
