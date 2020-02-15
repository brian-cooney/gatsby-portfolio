import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Card, Image, Heading, Text, Flex, Box } from 'rebass/styled-components'

const ProjectCard = ({ image, title, body, tech, url }) => (
  <a href={url}>
    <Card>
      <Box
        sx={{
          px: 4,
          py: 6,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
        }}
      ></Box>
      <Heading mt={2}>{title}</Heading>
      <Text my={3}>{body}</Text>
      <Text>{tech}</Text>
    </Card>
  </a>
)

export default ProjectCard
