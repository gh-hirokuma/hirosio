import React from "react"
import { Link, graphql } from "gatsby"
import { IoIosPaperPlane, IoIosMenu } from "react-icons/io"
import Footer from "../components/footer"

export default ({ data }) => (
  <>
    <header>
      <section className="w-full h-screen bg-gray-900 relative">
        <div className="absolute w-full h-screen bg-gray-900 opacity-75"></div>
        <div className="absolute w-full h-screen text-white flex flex-col justify-center items-center">
          <div className="absolute text-white text-2xl font-bold top-0 right-0 w-16 h-16 flex justify-center items-center bg-transparent">
            <IoIosMenu />
          </div>
          <h1 className="text-3xl md:text-5xl font-mono uppercase tracking-wider mb-4">
            <span className="text-blue-400">`</span>
            <span className="text-pink-400">$</span>
            <span className="text-blue-400">{`\{`}</span>
            <span className="text-green-300">
              {data.site.siteMetadata.author}
            </span>
            <span className="text-blue-400">{`\}`}</span>
            <span className="text-blue-400">`</span>
          </h1>
          <small className="text-lg uppercase border-b-2 pb-4 border-yellow-600 tracking-wider">
            {data.site.siteMetadata.position}
          </small>
          <Link
            to={`/contact`}
            className="p-5 px-12 border border-white hover:border-yellow-600 uppercase mt-16 rounded"
          >
            get in touch
          </Link>
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
      filter: { fields: { slug: { regex: "/works/" } } }
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
