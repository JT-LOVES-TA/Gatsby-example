import React from "react";
import { Link } from "gatsby";
import Layout from "../component/layout";
import "../styles/index.scss"
import Head from "../component/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Groot</h2>
      <p>Besoin d'un développeur ? <Link to="/contact">Contactez-moi.</Link></p>
    </Layout>
  )
}

export default IndexPage;