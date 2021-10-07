import React from "react";
import Layout from "../component/layout";
import { graphql } from "gatsby";
import DOMPurify from 'dompurify'


export const data = graphql`query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
  `

const BlogTemplate = (props) => {
    //Nettoyage du dangerouslySetInnerHTML
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(props.data.markdownRemark.html)
      })

    return (
    <Layout>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={sanitizedData()}></div>
    </Layout>)
}

export default BlogTemplate;