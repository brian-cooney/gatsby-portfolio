import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Card, Image, Heading, Text, Flex, Box } from 'rebass/styled-components'

const ProjectCard = ({ image, title, body, tech, url }) => (
  <a href={url}>
    <Card height="420px" textAlign="center">
      <Box
        sx={{
          px: 2,
          py: '6.2rem',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // ':hover': {
          //   transform: 'scale(1.1)',
          // },
        }}
      ></Box>
      <Box p={3}>
        <Heading color="black">{title}</Heading>
        <Text color="black" my={3}>
          {body}
        </Text>
        <Text fontSize={1}>{tech}</Text>
      </Box>
    </Card>
  </a>
)

export default ProjectCard
