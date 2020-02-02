import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../styles/footer.css'

const FooterStyled = styled.div`
  padding: 0.5rem 0;
  background-color: #fff;
  font-size: 1rem;
`

const FooterContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`

const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Copyright = styled.span`
  display: flex;
  align-items: center;
`

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Footer = () => (
  <FooterStyled>
    <FooterContainer>
      <FooterFlex>
        <Copyright>Copyright © 2020 Brian Cooney</Copyright>
        <FooterLinks />
      </FooterFlex>
    </FooterContainer>
  </FooterStyled>
)

export default Footer
