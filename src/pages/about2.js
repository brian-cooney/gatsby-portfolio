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
      <form name="contact" method="POST" action="/no-cache=1" netlify>
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Box>
    <Box px={0} py={0} width={[1, 1 / 2]}>
      <Text p={2} color="white" bg="blue">
        1/2
      </Text>
    </Box>
  </Flex>
)

export default About
