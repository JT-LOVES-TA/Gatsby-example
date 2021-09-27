import React from "react";
import { Link } from "gatsby";
import Header from "../component/header";
import Footer from "../component/footer";


const IndexPage = () => {
  return (<div>
    <Header></Header>
    <h1>Hello</h1>
    <h2>I'm Groot</h2>
    <p>Besoin d'un développeur ? <Link to="/contact">Contactez-moi.</Link></p>
    <Footer></Footer>
  </div>)
}

export default IndexPage;