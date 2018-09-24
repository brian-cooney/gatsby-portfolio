import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components' 
import Layout from '../components/layout'
import Dog from '../content/dog.jpg'

const DogImage = styled.img`
  width: 500px;
  display: block;
`


const About = () => (
  <Layout>
    <h1>About me</h1>
    <DogImage src={Dog}/>
    <Link to="/">Go back to the portfolio</Link>
  </Layout>
)

export default About;
