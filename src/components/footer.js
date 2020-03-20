import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { IoLogoTwitter, IoLogoGithub, IoMdMail } from "react-icons/io"

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
    <footer className="w-full bg-gray-900">
      <section className="container mx-auto text-white py-8 flex flex-col justify-center items-center">
        <ul className="flex flex-col md:flex-row">
          <li>
            <Link
              to={`/work`}
              className="inline-block p-8 py-4 uppercase text-center"
            >
              work
            </Link>
          </li>
          <li>
            <Link
              to={`/about`}
              className="inline-block p-8 py-4 uppercase text-center border-b-2 border-yellow-400"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to={`/contact`}
              className="inline-block p-8 py-4 uppercase text-center"
            >
              hello
            </Link>
          </li>
          <li>
            <Link
              to={`/blog`}
              className="inline-block p-8 py-4 uppercase text-center"
            >
              blog
            </Link>
          </li>
        </ul>
        <section className="my-8 flex flex-row">
          <span className="text-xl py-2 px-4 flex justify-center items-center">
            <IoMdMail />
          </span>
          <span className="text-xl py-2 px-4 flex justify-center items-center">
            <IoLogoTwitter />
          </span>
          <span className="text-xl py-2 px-4 flex justify-center items-center">
            <IoLogoGithub />
          </span>
        </section>
        <section>
          <small className="text-xs tracking-wider">
            © 2020 · {data.site.siteMetadata.author} · All Rights Reserved
          </small>
        </section>
      </section>
    </footer>
  )
}

export default Footer
