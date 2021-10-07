import { Link } from "gatsby";
import * as React from "react";
import Layout from "../component/layout";
import Head from "../component/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <h2>
        La meilleure façon de me contacter est via <Link to="https://www.linkedin.com/in/jtsf/" target="_blank">LinkedIn</Link> ou alors via <Link to="https://twitter.com/IAmJeyTee_" target="_blank">@IAmJeyTee_</Link> sur Twitter.
      </h2>
    </Layout>
  )
}

export default ContactPage