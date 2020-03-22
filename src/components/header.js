import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import { IoIosMenu, IoIosClose } from "react-icons/io"
import Nav from "./nav"

const Header = () => {
  const [open, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header>
      {open && <Nav />}
      <section className="py-10 px-4 md:px-16 pl-8 md:pl-16 bg-gray-900 flex justify-between items-center">
        <h1 className="text-white text-3xl">
          <Link to={`/`}>{data.site.siteMetadata.author}</Link>
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl bg-gray-800 w-16 h-16 text-white flex justify-center items-center"
        >
          {open ? <IoIosClose className="text-4xl" /> : <IoIosMenu />}
        </button>
      </section>
    </header>
  )
}

export default Header
