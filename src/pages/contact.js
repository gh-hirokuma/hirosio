import React from "react"
import { Link, graphql } from "gatsby"
import { IoIosPaperPlane, IoIosMenu } from "react-icons/io"
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
        <div className="text-6xl">
          <IoIosPaperPlane />
        </div>
        <h2 className="uppercase tracking-widest my-8 text-lg md:text-2xl font-semibold">
          lets work together!
        </h2>
        <p className="tracking-wide font-thin text-sm mb-16 leading-loose text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nec metus magna. Quisque et dolor dui. Curabitur porta lectus nisi.
          Maecenas sed scelerisque purus. Morbi elit augue, tincidunt rutrum
          posuere eu, fermentum a metus. Cras dapibus efficitur nibh non
          dignissim. Nam pretium arcu et metus tristique, non hendrerit neque
          dignissim.
        </p>
      </section>
      <section className="bg-gray-200">
        <section className="container mx-auto flex flex-col justify-center items-center py-16 pb-24">
          <h2 className="uppercase font-semibold tracking-widest text-lg md:text-2xl mb-8">
            get in touch
          </h2>
          <form className="px-4 md:px-0 w-full lg:w-1/2 flex flex-col justify-center items-center">
            <input
              type="text"
              className="w-full p-4 mb-4 text-lg placeholder-gray-700"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="w-full p-4 mb-4 text-lg placeholder-gray-700"
              placeholder="Your Email"
            />
            <input
              type="text"
              className="w-full p-4 mb-4 text-lg placeholder-gray-700"
              placeholder="Phone"
            />
            <textarea
              type="text"
              className="w-full h-64 p-4 text-lg mb-16 placeholder-gray-700"
              placeholder="Message"
            ></textarea>
            <input
              type="submit"
              className="bg-white p-2 px-4 w-24"
              value="Submit"
            />
          </form>
        </section>
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
