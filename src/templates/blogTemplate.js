import React from "react";
import Layout from "../component/layout";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from "../component/head";


export const data = graphql`query($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    publishedDate(fromNow: true)
    body {
      raw
      references {
          contentful_id
          __typename
          fixed (width:1600) {
            src
          }
        }
    }
  }
  }`

const BlogTemplate = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (

          <img
            src={node.data.target.fixed.src}
            alt={node.data.target.title}
          />

        )

      },
    },
  }
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(data.contentfulBlogPost.body, options)}

    </Layout>
  )
}

export default BlogTemplate;