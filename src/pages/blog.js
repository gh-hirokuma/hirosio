import React from "react"
import { Link, graphql } from "gatsby"
import { IoIosMenu } from "react-icons/io"
import { MdLaptopMac } from "react-icons/md"
import { DiCode } from "react-icons/di"
import { AiOutlineDatabase } from "react-icons/ai"

import Footer from "../components/footer"

export default ({ data }) => (
  <>
    <header>
      <section className="py-10 px-4 md:px-16 bg-gray-900 flex justify-between items-center">
        <h1 className="text-white text-3xl">
          <Link to={`/`}>{data.site.siteMetadata.author}</Link>
        </h1>
        <button className="text-2xl bg-gray-800 w-16 h-16 text-white flex justify-center items-center">
          <IoIosMenu />
        </button>
      </section>
    </header>
    <main>
      <section className="flex flex-col justify-center items-center pb-16 px-20 bg-gray-900">
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
  </>
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
