import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import preset from '@rebass/preset'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Icon from 'react-simple-icons'
import './layout.css'
import Footer from './Footer'
import NavBar from './NavBar'
import { Flex, Box, Text } from 'rebass/styled-components'

const linkStyle = {
  marginLeft: 20,
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const LayoutContent = styled.div`
  flex: 1 0 auto;
  padding-bottom: 3.75rem;
  box-sizing: border-box;
`

const LayoutContentContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={preset}>
          <LayoutWrapper>
            <NavBar />
            <LayoutContent>
              <LayoutContentContainer>{children}</LayoutContentContainer>
            </LayoutContent>
          </LayoutWrapper>
        </ThemeProvider>

        <Flex py={5} px={3} bg="#ececec" flexWrap="wrap">
          <Box mx="auto" px={0} py={0} width={[1 / 2, 1 / 4, 1 / 6, 1 / 6]}>
            <Text p={1} color="black">
              <Icon name="linkedin" />
              <a
                style={linkStyle}
                target="_blank"
                href="https://www.linkedin.com/in/bcooney88"
              >
                LinkedIn
              </a>
            </Text>
          </Box>
          <Box mx="auto" px={0} py={0} width={[1 / 2, 1 / 4, 1 / 6, 1 / 6]}>
            <Text p={1} color="black">
              <Icon name="github" />
              <a
                style={linkStyle}
                target="_blank"
                href="https://github.com/brian-cooney"
              >
                Github
              </a>
            </Text>
          </Box>
          <Box mx="auto" px={0} py={0} width={[1 / 2, 1 / 4, 1 / 6, 1 / 6]}>
            <Text p={1} color="black">
              <Icon name="twitter" />
              <a
                style={linkStyle}
                target="_blank"
                href="https://twitter.com/@bcooneydub"
              >
                Twitter
              </a>
            </Text>
          </Box>
          <Box mx="auto" px={0} py={0} width={[1 / 2, 1 / 4, 1 / 6, 1 / 6]}>
            <Text p={1} color="black">
              <Icon name="behance" />
              <a
                style={linkStyle}
                target="_blank"
                href="https://www.behance.net/briancooney"
              >
                Behance
              </a>
            </Text>
          </Box>
        </Flex>
        {/* <Footer /> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
