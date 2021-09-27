import { Link } from "gatsby";
import * as React from "react";
import Footer from "../component/footer";
import Header from "../component/header";


const AboutPage = () => {
  return (
    <div>
      <Header></Header>
      <h1>About me ! :)</h1>
      <h2>Je viens de terminer mes études en école d'ingénieur spécialisé en informatique à Polytech Nantes <br /> et je suis à la recherche d'un premier emploi en temps que developpeur web full-stack et/ou developpeur blockchaine. </h2>
      <br /><p>Vous avez besoin d'un développeur blockchaine ou d'un développeur full-stack ? <Link to="/contact">Contactez-moi! </Link></p>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage