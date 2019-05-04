import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const Button = styled.button`
  background: ${props => (props.safe ? "green" : "red")};
  height: ${props => (props.huge ? "400px" : "100px")};
  width: 200px;
  color: blue;
`

const buttonStyle = {
  background: "yellow",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`found`, `lost`, `kitten`]} />
    <h1>Hi kitten friends</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Button safe={true}> Safe</Button>
    <Button safe> Unsafe</Button>
    <Button>more</Button>
    <Button>more</Button>
    <Button>more</Button>
    <Button>more</Button>
    <Button>more</Button>
    <Button>more</Button>

    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to about page</Link>
  </Layout>
)

export default IndexPage
