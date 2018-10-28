import React from 'react'

import Layout from '../components/layout'
import styled from 'styled-components'
import House from '../content/house.jpg'
import Icon from 'react-simple-icons'

const HouseImage = styled.img`
  margin-top: 60px;
  margin: 0 auto;
  width: 100%;
  height: auto;
`

const SocialWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const StyledUl = styled.ul`
  text-decoration: none;
  list-style-type: none;
`

const StyledLi = styled.li`
  text-decoration: none;
`

const linkStyle = {
  marginLeft: 20,
}

const Contact = () => (
  <Layout>
    <SocialWrapper>
      <StyledUl>
        <StyledLi>
          <Icon name="linkedin" />
          <a
            style={linkStyle}
            target="_blank"
            href="https://www.linkedin.com/in/bcooney88"
          >
            LinkedIn
          </a>
        </StyledLi>
        <StyledLi>
          <Icon name="github" />
          <a
            style={linkStyle}
            target="_blank"
            href="https://github.com/brian-cooney"
          >
            Github
          </a>
        </StyledLi>
        <StyledLi>
          <Icon name="twitter" />
          <a
            style={linkStyle}
            target="_blank"
            href="https://twitter.com/@bcooneydub"
          >
            Twitter
          </a>
        </StyledLi>
        <StyledLi>
          <Icon name="behance" />
          <a
            style={linkStyle}
            target="_blank"
            href="https://www.behance.net/briancooney"
          >
            Behance
          </a>
        </StyledLi>
      </StyledUl>
    </SocialWrapper>
    <HouseImage src={House} />
  </Layout>
)

export default Contact
