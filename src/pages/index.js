import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Flex, Box } from 'rebass/styled-components'
import '../styles/fonts.css'

import Avatar from '../content/fishing.png'
import Card from '../components/Card'
import ProjectCard from '../sections/projects'
import projects from '../data/projects'

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
            Below are a few recent projects I have worked on
          </h3>
        </TitleWrapper>
      </div>

      <Flex flexWrap="wrap" mx={-2}>
        {projects.map(project => {
          return (
            <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} px={3} mb={4}>
              <Card
                image={project.image}
                title={project.title}
                body={project.body}
                tech={project.tech}
                url={project.url}
              />
            </Box>
          )
        })}
      </Flex>
    </div>
  </Layout>
)

export default IndexPage
