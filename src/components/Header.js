import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Bryan Edison</h1>
        <p>Full-stack Software Engineer with a passion for innovation</p>
         <section>
            <ul className="icons">
                <li><a href="https://twitter.com/bryanAEdison" target="_" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/bryanedison" target="_" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="mailto:BryanAEdison@gmail.com" className="icon fa-envelope-o alt"><span className="label">Email</span></a></li>
                <li><a href="https://linkedin.com/in/bryanedison" target="_" className="icon fa-linkedin-square alt"><span className="label">LinkedIn</span></a></li>
            </ul>
        </section>
    </header>
)

export default Header
