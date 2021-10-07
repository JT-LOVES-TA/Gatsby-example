import { Link } from "gatsby";
import * as React from "react";
import Layout from "../component/layout";
import Head from "../component/head";



const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me ! :)</h1>
      <h2>Je viens de terminer mes études en école d'ingénieur spécialisé en informatique à Polytech Nantes <br /> et je suis à la recherche d'un premier emploi en temps que developpeur web full-stack et/ou developpeur blockchaine. </h2>
      <br /><p>Vous avez besoin d'un développeur blockchaine ou d'un développeur full-stack ? <Link to="/contact">Contactez-moi! </Link></p>
    </Layout>
  )
}

export default AboutPage