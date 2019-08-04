import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { graphql } from 'gatsby'

export default ({ data: { allContentfulLesson } }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {allContentfulLesson.edges.map(({node}) => (
      <div>
        <h1>{node.title}</h1>
        <img src={node.image.file.url} />
      </div>
    ))}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
{
  allContentfulLesson {
    edges {
      node {
        slug
        title
        image {
          file {
            url
          }
        }
      }
    }
  }
}`
