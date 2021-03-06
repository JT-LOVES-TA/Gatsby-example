const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blogTemplate.js')
    const res = await graphql(`
    query{allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow:true)
          }
        }
      }
    }
    `)
    res.data.allContentfulBlogPost.edges.forEach((edge) =>{
        createPage({
            component: blogTemplate,
            path:`/blog/${edge.node.slug}`,
            context : {
                slug : edge.node.slug
            }
        })
    })
}