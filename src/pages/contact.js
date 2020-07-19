import React from "react"
import { Link, graphql } from "gatsby"
import { IoIosPaperPlane, IoIosMenu } from "react-icons/io"
import Footer from "../components/footer"
import Meta from "../components/meta"
import Header from "../components/header"

export default ({ data }) => (
  <Meta title={`Contact`}>
    <Header />
    <main>
      <section className="flex flex-col justify-center items-center py-16 px-4 md:px-20 bg-white">
        <div className="text-6xl">
          <IoIosPaperPlane />
        </div>
        <h2 className="uppercase tracking-widest my-8 text-lg md:text-2xl font-semibold">
          lets work together!
        </h2>
        <p className="tracking-wide font-thin text-sm mb-16 leading-loose text-center text-gray-600">
          If you have something to ask or share information, please feel free to
          contact me below form or via sns account.
        </p>
      </section>
      <section className="bg-gray-200">
        <section className="container mx-auto flex flex-col justify-center items-center py-16 pb-24">
          <h2 className="uppercase font-semibold tracking-widest text-lg md:text-2xl mb-8">
            get in touch
          </h2>
          <form
            className="px-4 md:px-0 w-full lg:w-1/2 flex flex-col justify-center items-center"
            action="https://formspree.io/xrglyalg"
            method="POST"
          >
            <input
              type="text"
              name="name"
              className="w-full p-4 mb-4 text-lg placeholder-gray-700"
              placeholder="Your Name"
            />
            <input
              type="text"
              name="_replyto"
              className="w-full p-4 mb-4 text-lg placeholder-gray-700"
              placeholder="Your Email"
            />
            <input
              type="text"
              name="phone"
              className="w-full p-4 mb-4 text-lg placeholder-gray-700"
              placeholder="Phone"
            />
            <textarea
              type="text"
              name="message"
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
  </Meta>
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
