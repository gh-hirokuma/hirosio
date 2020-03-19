import React from "react"
import { Link, graphql } from "gatsby"
import { IoIosPaperPlane } from "react-icons/io"
import Footer from "../components/footer"

export default ({ data }) => (
  <>
    <header>
      <section className="py-10 px-16 bg-gray-900 flex justify-between items-center">
        <h1 className="text-white text-3xl">{data.site.siteMetadata.author}</h1>
        <button className="text-xl bg-gray-800 w-16 h-16 text-white">三</button>
      </section>
    </header>
    <main>
      <section className="flex flex-col justify-center items-center py-16 px-20">
        <div className="text-6xl">
          <IoIosPaperPlane />
        </div>
        <h2 className="uppercase tracking-widest my-8 text-2xl">
          lets work together!
        </h2>
        <p className="tracking-wide text-sm mb-16 leading-loose text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nec metus magna. Quisque et dolor dui. Curabitur porta lectus nisi.
          Maecenas sed scelerisque purus. Morbi elit augue, tincidunt rutrum
          posuere eu, fermentum a metus. Cras dapibus efficitur nibh non
          dignissim. Nam pretium arcu et metus tristique, non hendrerit neque
          dignissim.
        </p>
      </section>
      <section></section>
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
