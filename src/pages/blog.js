import * as React from "react";
import Layout from "../component/layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import * as blogStyles from './blog.module.scss'
import Head from "../component/head";


const BlogPage = () => {

  const data = useStaticQuery(
    graphql`query{allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(fromNow:true)
        }
      }
    }
  }`)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((e) => {
          return (<li className={blogStyles.post}>
            <p>
              <Link to={`/blog/${e.node.slug}`}>
                <h2>{e.node.title}</h2>
                <p>{e.node.publishedDate}</p>
              </Link>
            </p>
          </li>
          )
        }
        )
        }
      </ol>
    </Layout>
  )
}

export default BlogPage