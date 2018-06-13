import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">

        <section>
            <ul className="icons">
                <li><a href="twitter.com/bryanAEdison" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="github.com/bryanedison" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="mailto:BryanAEdison@gmail.com" className="icon fa-envelope-o alt"><span className="label">Email</span></a></li>
                <li><a href="linkedin.com/in/bryanedison" className="icon fa-linkedin-square alt"><span className="label">LinkedIn</span></a></li>
            </ul>
            <h4> © 2018 Edison Bryan.</h4>
        </section>
    </footer>
)

export default Footer
