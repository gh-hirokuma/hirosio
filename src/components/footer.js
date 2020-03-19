import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="w-full h-64 bg-gray-900">
      <section className="container mx-auto text-white py-8 flex flex-col justify-center items-center">
        <ul>
          <li className="inline-block p-8 py-4 uppercase">work</li>
          <li className="inline-block p-8 py-4 uppercase border-b-2 border-yellow-400">
            about
          </li>
          <li className="inline-block p-8 py-4 uppercase">hello</li>
          <li className="inline-block p-8 py-4 uppercase">blog</li>
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
  )
}

export default Footer
