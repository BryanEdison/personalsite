import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Bryan Edison</h1>
        <p>Full-stack Software Engineer with a passion for innovation</p>
    </header>
)

export default Header
