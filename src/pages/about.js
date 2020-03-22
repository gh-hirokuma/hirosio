import React from "react"
import { Link, graphql } from "gatsby"
import { IoIosMenu } from "react-icons/io"
import { MdLaptopMac } from "react-icons/md"
import { DiCode } from "react-icons/di"
import { AiOutlineDatabase } from "react-icons/ai"

import Footer from "../components/footer"
import Meta from "../components/meta"
import Header from "../components/header"

export default ({ data }) => (
  <Meta title={`About`}>
    <Header />
    <main>
      <section className="flex flex-col justify-center items-center py-16 px-0 md:px-20 bg-white">
        <h2 className="uppercase tracking-widest my-8 text-lg md:text-2xl font-semibold">
          about me
        </h2>
        <section className="flex flex-col md:flex-row">
          <div className="w-full lg:w-3/12 relative">
            <img
              className="w-full object-cover"
              src={`https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80`}
              alt={`My Profile`}
            />
          </div>
          <div className="w-full lg:w-9/12 tracking-wide font-thin mb-16 leading-loose text-gray-600 p-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            condimentum at nulla non pellentesque. Nulla consequat in justo nec
            porta. Sed ac turpis quis quam egestas cursus non sagittis nisi.
            Donec finibus ligula at metus suscipit congue. Aenean auctor dui
            sapien, eu volutpat dolor dapibus ut. Sed ultrices laoreet elit at
            ornare. Vivamus pulvinar, elit sed tristique tincidunt, neque augue
            tempor ante, nec ultricies urna eros sed libero. Curabitur tellus
            tortor, cursus et libero nec, rutrum lacinia quam. Sed quis arcu ut
            mauris pretium consectetur in id lacus. Proin sed risus mi. Nam
            aliquet arcu non mi mattis, et scelerisque lectus sagittis. Integer
            ac felis nec quam feugiat bibendum ac nec orci. Etiam consectetur
            condimentum velit non pulvinar. Nullam pulvinar ligula quis magna
            fringilla suscipit id ac tellus. Aenean sed nisl non diam mattis
            volutpat et ac nisi. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras cursus ex nunc,
            pretium aliquam arcu sodales sed. Etiam justo lorem, maximus ut nibh
            quis, bibendum auctor dolor. In id massa ut tellus laoreet dictum.
            Aliquam convallis nibh eu odio placerat, a efficitur felis tempor.
            Duis in placerat odio.
          </div>
        </section>
      </section>
      <section className="bg-gray-200">
        <section className="container mx-auto flex flex-col justify-center items-center py-16 pb-24">
          <h2 className="uppercase font-semibold tracking-widest text-lg md:text-2xl mb-8">
            How I can help
          </h2>
          <ul className="w-full flex flex-col md:flex-row">
            <li className="w-full md:w-1/3 bg-gray-900 text-white flex flex-col justify-center items-center py-8">
              <div className="mb-4">
                <i className="text-4xl">
                  <MdLaptopMac />
                </i>
              </div>
              <h3 className="uppercase tracking-wider py-4 border-b-2 border-yellow-600 mb-4">
                frontend development
              </h3>
              <p className="p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                condimentum at nulla non pellentesque. Nulla consequat in justo
                nec porta. Sed ac turpis quis quam egestas cursus non sagittis
                nisi.
              </p>
            </li>
            <li className="w-full md:w-1/3 bg-gray-800 text-white flex flex-col justify-center items-center py-8">
              <div className="mb-4">
                <i className="text-4xl">
                  <DiCode />
                </i>
              </div>
              <h3 className="uppercase tracking-wider py-4 border-b-2 border-yellow-600">
                backend development
              </h3>
              <p className="p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                condimentum at nulla non pellentesque. Nulla consequat in justo
                nec porta. Sed ac turpis quis quam egestas cursus non sagittis
                nisi.
              </p>
            </li>
            <li className="w-full md:w-1/3 bg-gray-700 text-white flex flex-col justify-center items-center py-8">
              <div className="mb-4">
                <i className="text-4xl">
                  <AiOutlineDatabase />
                </i>
              </div>
              <h3 className="uppercase tracking-wider py-4 border-b-2 border-yellow-600">
                server side
              </h3>
              <p className="p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                condimentum at nulla non pellentesque. Nulla consequat in justo
                nec porta. Sed ac turpis quis quam egestas cursus non sagittis
                nisi.
              </p>
            </li>
          </ul>
          <div className="mt-16 py-4 border-b-2 border-yellow-600">
            <Link
              to={`/contact`}
              className="text-2xl uppercase hover:text-yellow-600"
            >
              let's discuss your project
            </Link>
          </div>
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
