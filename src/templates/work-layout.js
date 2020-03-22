import React from "react"
import { graphql } from "gatsby"
import Meta from "../components/meta"
import Header from "../components/header"
import Footer from "../components/footer"
import Tags from "../components/tags"
import "./work-layout.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Meta>
      <Header />
      <section style={{ height: "40vh" }}>
        <div className="h-full container mx-auto">
          <img
            className="h-full w-full object-cover"
            src={post.frontmatter.hero}
            alt={post.frontmatter.title}
          />
        </div>
      </section>
      <section className="container mx-auto p-4">
        <h1 className="text-white text-3xl my-4">{post.frontmatter.title}</h1>
        <Tags node={post} className="p-0 mb-8" />
        <div
          className="work-contents text-white"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
      <Footer />
    </Meta>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        hero
        tags
      }
    }
  }
`
