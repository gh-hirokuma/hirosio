import React from "react"

const Tags = ({ node, className }) => (
  <section
    className={
      className ? className : "p-4 bg-white flex flex-row flex-wrap rounded-b"
    }
  >
    {node.frontmatter.tags &&
      node.frontmatter.tags.map((tag) => (
        <span className="bg-gray-300 text-gray-700 py-1 px-4 mb-2 rounded-full m-1 text-sm antialiased">
          {tag}
        </span>
      ))}
  </section>
)

export default Tags
