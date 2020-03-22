import React from "react"
import { Link, graphql } from "gatsby"
import { IoIosMenu } from "react-icons/io"

import Footer from "../components/footer"
import Meta from "../components/meta"
import Header from "../components/header"
import Card from "../components/card"

export default ({ data }) => (
  <Meta title={`Blog`}>
    <Header />
    <main>
      <section className="flex flex-col justify-center items-center pb-16 px-0 md:px-20 bg-gray-900">
        <section className="container mx-auto">
          <ul className="flex flex-wrap">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card node={node} />
            ))}
          </ul>
        </section>
      </section>
    </main>
    <Footer />
  </Meta>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        position
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/posts/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            hero
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
