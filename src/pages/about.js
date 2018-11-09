import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Dog from '../content/dog.jpg'
import { Flex, Box } from 'rebass'

const DogImage = styled.img`
  margin-top: 60px;
  width: 50%;
  height: auto;
`

const About = () => (
  <Layout>
    <Flex alignItems="center">
      <Box mx="auto" p={2} fontSize={3} pt={4} width={[1, 1, 1 / 2]}>
        "Digital fabrication tools and the maker movement were my gateway drugs
        into web development. Coming from a background in furniture and product
        design, I've swapped my chisel for text editor! <br /> To Kickstart my
        new career in software craftsmanship, in early 2017, I chose to study
        with General Assembly on their flagship 3 Month
        <a href="https://generalassemb.ly/education/web-development-immersive">
          Web Development Immersive course.
        </a>
        &nbsp;Since that incredible experience I have worked for a top&nbsp;
        <a href="http://www.wcrs.com/">agency</a> and SAAS product&nbsp;
        <a href="http://www.brandworkz.com/">company</a>
        &nbsp; building on my skill as developer. <br />
        Right now, I'm focused on learning JavaScript deeply alongside React
        GraphQl & node".
      </Box>
    </Flex>
  </Layout>
)

export default About
