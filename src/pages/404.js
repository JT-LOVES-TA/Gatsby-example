import * as React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout"
import Head from "../component/head"
// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found</h1>
      <Link to="/">Head home</Link>
    </Layout>
  )
}

export default NotFoundPage
