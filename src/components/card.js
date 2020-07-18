import React from "react"
import { Link } from "gatsby"
import Tags from "../components/tags"

const Card = ({ node }) => (
  <li className="bg-transparent w-full lg:w-1/3 rounded p-2" key={node.id}>
    <Link className="relative" to={node.fields.slug}>
      <img
        className="w-full h-64 object-cover rounded-t"
        src={node.frontmatter.hero}
        alt={node.frontmatter.title}
      />
      <section className="w-full bg-white p-4 pb-0">
        <h2 className="text-yellow-700 text-lg mb-2">
          {node.frontmatter.title}
        </h2>
        <div className={`text-gray-400 text-sm mb-2`}>
          {node.frontmatter.spanStart} - {node.frontmatter.spanEnd}
        </div>
        <p className="text-gray-500">{node.frontmatter.description}</p>
      </section>
      <Tags node={node} />
    </Link>
  </li>
)

export default Card
