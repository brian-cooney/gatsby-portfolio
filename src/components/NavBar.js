import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: #fff;
`

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`

const NavFlex = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: #333;
  text-decoration: none;
`

const NavWrapper = styled.nav`
  display: flex;
  overflow: auto;
  margin-left: 0.5rem;
`

const NavLinks = styled(Link)`
  flex: 0 0 auto;
  padding: 1.625rem 0.75rem;
  line-height: 1;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`


const NavBar = () => (
    <Wrapper>
      <Container>
        <NavFlex>
          <Name>Brian Cooney</Name>
          <NavWrapper>
          <NavLinks to="/portfolio/">Portfolio</NavLinks>
          <NavLinks to="/about/">About</NavLinks>
          <NavLinks to="/contact/">Contact</NavLinks>
          </NavWrapper>
        </NavFlex>
      </Container>
    </Wrapper>
)

export default NavBar
