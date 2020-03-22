import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import { IoIosMenu, IoIosClose } from "react-icons/io"
import Nav from "./nav"

const IndexHeader = () => {
  const [open, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query IndexHeaderQuery {
      site {
        siteMetadata {
          title
          author
          position
        }
      }
    }
  `)

  return (
    <header>
      {open && <Nav />}
      <section className="w-full h-screen bg-gray-900 relative">
        <div className="absolute w-full h-screen bg-gray-900 opacity-75"></div>
        <div className="absolute w-full h-screen text-white flex flex-col justify-center items-center">
          <button
            onClick={() => setOpen(!open)}
            className="absolute text-white text-2xl font-bold top-0 right-0 w-16 h-16 flex justify-center items-center bg-transparent"
          >
            {open ? <IoIosClose className="text-4xl" /> : <IoIosMenu />}
          </button>
          <h1 className="text-2xl md:text-5xl font-mono uppercase tracking-wider mb-4">
            <span className="text-blue-400">`</span>
            <span className="text-pink-400">$</span>
            <span className="text-blue-400">{`{`}</span>
            <span className="text-green-300">
              {data.site.siteMetadata.author}
            </span>
            <span className="text-blue-400">{`}`}</span>
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
  )
}

export default IndexHeader
