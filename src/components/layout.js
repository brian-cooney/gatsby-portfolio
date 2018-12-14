import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

import './layout.css'
import Footer from './Footer'
import NavBar from './NavBar'

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
        <LayoutWrapper>
          <NavBar />
          <LayoutContent>
            <LayoutContentContainer>{children}</LayoutContentContainer>
          </LayoutContent>
          <Footer />
        </LayoutWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
