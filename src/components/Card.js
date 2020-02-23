import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Card, Image, Heading, Text, Flex, Box } from 'rebass/styled-components'

const ProjectCard = ({ image, title, body, tech, url }) => (
  <a href={url}>
    <Card
      textAlign="center"
      sx={{
        boxShadow: '0 0 14px rgba(0,0,0,.125)',
      }}
    >
      <Box
        sx={{
          px: 2,
          py: ['6.2rem', '6.2rem', '9rem'],
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // ':hover': {
          //   transform: 'scale(1.1)',
          // },
        }}
      ></Box>
      <Box p={3} height="190px">
        <Heading color="black">{title}</Heading>
        <Text color="black" my={3} fontWeight="300">
          {body}
        </Text>
        <Text fontSize={1} fontWeight="300">
          {tech}
        </Text>
      </Box>
    </Card>
  </a>
)

export default ProjectCard
