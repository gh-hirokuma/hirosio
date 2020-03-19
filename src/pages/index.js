import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <>
    <header>
      <section className="w-full h-screen bg-gray-900 relative">
        <div className="absolute w-full h-screen bg-gray-900 opacity-75"></div>
        <div className="absolute w-full h-screen text-white flex flex-col justify-center items-center">
          <div className="absolute text-white font-bold top-0 right-0 w-16 h-16 flex justify-center items-center bg-transparent">
            三
          </div>
          <h1 className="text-5xl font-mono uppercase tracking-wider">
            {data.site.siteMetadata.author}
          </h1>
          <small className="text-lg uppercase">
            {data.site.siteMetadata.position}
          </small>
          <button className="p-2 px-4 border-2 border-white uppercase mt-8 rounded">
            get in touch
          </button>
        </div>
        <img
          className="w-full h-screen object-cover"
          src={`https://images.unsplash.com/photo-1510070009289-b5bc34383727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80`}
          alt="hero"
        />
      </section>
    </header>
    <main>
      <section className="w-full bg-gray-900 text-white">
        <section className="container mx-auto">
          <ul className="flex flex-wrap">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li className="bg-yellow-700 w-1/4 h-64 p-4" key={node.id}>
                <Link to={node.fields.slug}>
                  <h3>{node.frontmatter.title} </h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
    <footer className="w-full h-64 bg-gray-900">
      <section className="container mx-auto text-white py-8 flex flex-col justify-center items-center">
        <ul>
          <li className="inline-block p-8 py-4 uppercase">work</li>
          <li className="inline-block p-8 py-4 uppercase border-b-2 border-yellow-400">
            about
          </li>
          <li className="inline-block p-8 py-4 uppercase">hello</li>
        </ul>
        <section className="mt-4 mb-8">
          <span className="mr-4">T</span>
          <span>M</span>
        </section>
        <section>
          <small className="text-xs">
            © 2020 · {data.site.siteMetadata.author} · All Rights Reserved
          </small>
        </section>
      </section>
    </footer>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
