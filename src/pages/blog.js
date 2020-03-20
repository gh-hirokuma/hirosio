import React from "react"
import { Link, graphql } from "gatsby"
import { IoIosMenu } from "react-icons/io"
import { MdLaptopMac } from "react-icons/md"
import { DiCode } from "react-icons/di"
import { AiOutlineDatabase } from "react-icons/ai"

import Footer from "../components/footer"

export default ({ data }) => (
  <>
    <header>
      <section className="py-10 px-4 md:px-16 bg-gray-900 flex justify-between items-center">
        <h1 className="text-white text-3xl">
          <Link to={`/`}>{data.site.siteMetadata.author}</Link>
        </h1>
        <button className="text-2xl bg-gray-800 w-16 h-16 text-white flex justify-center items-center">
          <IoIosMenu />
        </button>
      </section>
    </header>
    <main>
      <section className="flex flex-col justify-center items-center py-16 px-20">
        <h2 className="uppercase tracking-widest my-8 text-lg md:text-2xl font-semibold">
          Blog
        </h2>
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
  }
`
