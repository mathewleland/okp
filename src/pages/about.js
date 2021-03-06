import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About page" />
    <h1>This should be the about page</h1>
    <p>Welcome to the about page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
