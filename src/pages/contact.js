import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styled from 'styled-components' 
import House from '../content/house.jpg'

const HouseImage = styled.img`
  width: 900px;
  display: block;
  margin-top: 60px;
`

const Contact = () => (
  <Layout>

    <HouseImage src={House}/>
  </Layout>
)

export default Contact;
