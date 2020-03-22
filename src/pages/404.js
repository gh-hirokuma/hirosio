import React from "react"

import SEO from "../components/seo"
import Meta from "../components/meta"

const NotFoundPage = () => (
  <Meta>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Meta>
)

export default NotFoundPage
