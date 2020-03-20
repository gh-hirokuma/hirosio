const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    let newSlug
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    if (node.fileAbsolutePath.includes("works")) {
      newSlug = `/works${slug}`
    } else {
      newSlug = `/posts${slug}`
    }

    createNodeField({
      node,
      name: `slug`,
      value: newSlug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/work-layout.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
