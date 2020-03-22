/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import SEO from "./seo"

const Meta = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <body className="bg-gray-900" />
      </Helmet>
      <SEO title={title} description={description} />
      {children}
    </>
  )
}

export default Meta
