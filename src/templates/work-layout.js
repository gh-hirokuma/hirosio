import React from "react"
import { graphql } from "gatsby"
import Meta from "../components/meta"
import Header from "../components/header"
import Footer from "../components/footer"
import Tags from "../components/tags"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Meta
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      metaImage={post.frontmatter.hero}
    >
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
        <h1 className="text-white text-3xl my-4 antialiased">
          {post.frontmatter.title}
        </h1>
        <Tags node={post} className="p-0 mb-8 w-full flex flex-row flex-wrap" />
        <span className="text-white bg-yellow-600 text-sm py-1 px-2">
          Span:{" "}
          {post.frontmatter.spanStart &&
            post.frontmatter.spanStart.split("-").join("/")}{" "}
          ~{" "}
          {post.frontmatter.spanEnd &&
            post.frontmatter.spanEnd.split("-").join("/")}
        </span>
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
        description
        hero
        tags
        spanStart
        spanEnd
      }
    }
  }
`
