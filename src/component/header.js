import { Link } from "gatsby";
import React from "react";

const Header = () => {
    return (
        <header>
            <nav>
                <h1>Gatsby example</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;