import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { IoLogoTwitter, IoLogoGithub, IoMdMail } from "react-icons/io"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          emailAddress
          twitterAccount
          githubAccount
          githubAccount2
        }
      }
    }
  `)

  return (
    <footer className="w-full bg-gray-900">
      <section className="container mx-auto text-white py-8 flex flex-col justify-center items-center">
        <ul className="hidden md:flex md:flex-row">
          <li>
            <Link
              to={`/work`}
              className="inline-block p-8 py-4 uppercase text-center"
              activeClassName="border-b-2 border-yellow-400"
            >
              work
            </Link>
          </li>
          <li>
            <Link
              to={`/about`}
              className="inline-block p-8 py-4 uppercase text-center"
              activeClassName="border-b-2 border-yellow-400"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to={`/contact`}
              className="inline-block p-8 py-4 uppercase text-center"
              activeClassName="border-b-2 border-yellow-400"
            >
              hello
            </Link>
          </li>
          <li>
            <Link
              to={`/blog`}
              className="inline-block p-8 py-4 uppercase text-center"
              activeClassName="border-b-2 border-yellow-400"
            >
              blog
            </Link>
          </li>
        </ul>
        <ul className="w-full grid grid-cols-2 md:hidden">
          <li className="w-full h-32 shadow-md">
            <Link
              to={`/work`}
              className="h-32 w-full flex justify-center items-center uppercase text-lg text-center"
              activeClassName="bg-yellow-900"
            >
              work
            </Link>
          </li>
          <li className="w-full h-32 shadow-md">
            <Link
              to={`/about`}
              className="h-32 w-full flex justify-center items-center uppercase text-lg text-center"
              activeClassName="bg-yellow-900"
            >
              about
            </Link>
          </li>
          <li className="w-full h-32 shadow-md">
            <Link
              to={`/contact`}
              className="h-32 w-full flex justify-center items-center uppercase text-lg text-center"
              activeClassName="bg-yellow-900"
            >
              hello
            </Link>
          </li>
          <li className="w-full h-32 shadow-md">
            <Link
              to={`/blog`}
              className="h-32 w-full flex justify-center items-center uppercase text-lg text-center"
              activeClassName="bg-yellow-900"
            >
              blog
            </Link>
          </li>
        </ul>
        <section className="my-8 flex flex-row">
          <a
            href={`mailto:${data.site.siteMetadata.emailAddress}?subject=I love you`}
            className="text-xl py-2 px-4 flex justify-center items-center"
          >
            <IoMdMail />
          </a>
          <a
            href={`https://twitter.com/${data.site.siteMetadata.twitterAccount}`}
            className="text-xl py-2 px-4 flex justify-center items-center"
          >
            <IoLogoTwitter />
          </a>
          <a
            href={`https://github.com/${data.site.siteMetadata.githubAccount}`}
            className="text-xl py-2 px-4 flex justify-center items-center"
          >
            <IoLogoGithub />
          </a>
          <a
            href={`https://github.com/${data.site.siteMetadata.githubAccount2}`}
            className="text-xl py-2 px-4 flex justify-center items-center"
          >
            <IoLogoGithub />
          </a>
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
