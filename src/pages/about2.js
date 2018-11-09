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
  <Flex flexWrap="wrap">
    <Box px={0} py={0} width={[1, 1 / 2]}>
      <Text p={2} color="white" bg="blue">
        1/2
      </Text>
    </Box>
    <Box px={0} py={0} width={[1, 1 / 2]}>
      <Text p={2} color="white" bg="blue">
        1/2
      </Text>
    </Box>
  </Flex>
)

export default About
