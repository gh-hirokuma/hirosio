import React from "react"
import { Link, graphql } from "gatsby"
import Footer from "../components/footer"
import Meta from "../components/meta"
import IndexHeader from "../components/index_header"

export default ({ data }) => (
  <Meta title={`Home`}>
    <IndexHeader />
    <main>
      <section className="w-full bg-gray-900 text-white">
        <section className="container mx-auto">
          <ul className="flex flex-wrap">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li
                className="bg-yellow-700 w-full lg:w-1/3 h-64 relative"
                key={node.id}
              >
                <Link to={node.fields.slug}>
                  <img
                    className="w-full h-64 object-cover"
                    src={node.frontmatter.hero}
                    alt={node.frontmatter.title}
                  />
                </Link>
              </li>
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
      filter: { fields: { slug: { regex: "/works/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            hero
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
