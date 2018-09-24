import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styled from 'styled-components' 
import House from '../content/house.jpg'
import Github from '../content/github.svg'

const HouseImage = styled.img`
  width: 900px;
  display: block;
  margin-top: 60px;
`

const Contact = () => (
  <Layout>
    <a href="https://github.com/brian-cooney">
    <img src={Github} alt=""/>
    </a>
    <HouseImage src={House}/>
  </Layout>
)

export default Contact;
