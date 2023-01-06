/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  })
}

const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allPrismicServicePage {
          nodes {
            id
            data {
              page_title {
                text
              }
            }
            prismicId
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  result.data.allPrismicServicePage.nodes.forEach(service_page => {
    createPage({
      path: `/services/${service_page.data.page_title.text
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
      component: path.resolve(
        `./src/components/PageTemplates/ServiceTemplate/ServiceTemplate.jsx`
      ),
      context: {
        id: service_page.id,
      },
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
    })
  })
}
