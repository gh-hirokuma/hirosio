import React from "react"
import { Link, graphql } from "gatsby"
import { MdLaptopMac } from "react-icons/md"
import { DiCode } from "react-icons/di"
import { AiOutlineDatabase } from "react-icons/ai"

import Footer from "../components/footer"
import Meta from "../components/meta"
import Header from "../components/header"
import SkillChip from "../components/skill-chip"

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
            I am a fullstack developer, mainly focus on mobile (hybrid) web app
            and studyholic to improve my development skills every single day.
            coming soon
          </div>
        </section>
      </section>
      <section className="bg-gray-200">
        <section className="container mx-auto flex flex-col justify-center items-center py-16 pb-8">
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
                I can handle frontend CSS/HTML/Javascript, SPA so on, writing
                well-managed source code with high performance. plus, I know
                some of SEO knowledges to create attractive contents.
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
                I can handle monolithic application with full web framework, and
                also can handle API Server such as REST API and GraphQL API with
                PHP, Ruby, NodeJS, Python, and Golang is the recent one
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
                In case of clould infrastructure, I can handle well such as AWS,
                GCP and well focus on serverless architecuture for operation
                free products
              </p>
            </li>
          </ul>
        </section>
      </section>
      <section className="bg-gray-200">
        <section className="container mx-auto flex flex-col justify-center items-center py-16 pb-8">
          <h2 className="uppercase font-semibold tracking-widest text-lg md:text-2xl mb-8">
            Which Skill I Can Handle
          </h2>
          <ul className="w-full flex flex-col md:flex-row flex-wrap">
            {data.site.siteMetadata.skillsets.map((skill) => (
              <SkillChip {...skill} />
            ))}
          </ul>
        </section>
      </section>
      <section className="bg-gray-200">
        <section className="container mx-auto flex flex-col justify-center items-center py-16 pb-24">
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
        skillsets {
          name
          desc
          imgSrc
          score
          primaryColor
          experienced
        }
      }
    }
  }
`
