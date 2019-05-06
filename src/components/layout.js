/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Navbar from "./navbar"

import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  //  we will have to write media queries to make this display block for smaller screens 😃

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
      <AppContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
      style={{
        margin: `0 auto`,
        maxWidth: 900,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        border: '3px solid blue'
        }}
      >
        <Navbar />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </AppContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
