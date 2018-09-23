import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const FooterStyled = styled.div`
    padding: .5rem 0;
    background-color: #fff;
    font-size: .75rem;
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

const Email = styled.span`
    display: flex;
    flex-wrap: wrap;
`

const FooterIcons = styled.div`
    display: flex;
`

const StyledLinks = styled(Link)`
    display: flex;
    background: url("../content/github.svg")
`

const StyledLinkedin = styled(Link)`
    display: flex;
    background: url("../content/linkedin.svg")

`



const Footer = () => (
  <FooterStyled>
      <FooterContainer>
          <FooterFlex>
             <Copyright>Copyright © 2018 Brian Cooney</Copyright>
                <FooterLinks>
                    <Email>Design+Code by brian@briancooney.co.uk</Email>
                    <FooterIcons>
                        <StyledLinks href="https://github.com/brian-cooney"></StyledLinks>
                        <StyledLinkedin href="https://linkedin.com/in/bcooney88"></StyledLinkedin>
                    </FooterIcons>
                </FooterLinks>
          </FooterFlex>
      </FooterContainer>

  </FooterStyled>
)

export default Footer
