import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../components/Header';
import pic01 from '../assets/images/me.jpg'
import Nav from '../components/Nav'
import Waypoint from 'react-waypoint'
import Link from 'gatsby-link'



class PriceLine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
      <Header/>
      <Waypoint
      onEnter={this._handleWaypointEnter}
      onLeave={this._handleWaypointLeave}
    >
    </Waypoint>
    <Nav sticky={this.state.stickyNav} />
      <div id="main">
      <section id="intro" className="main">
      <div className="spotlight">
        <div className="content">
      <header className="major">
                  <h2>Hi PriceLine!</h2>
            </header>
            <p>I'm sincerely interested in working for PriceLine since attending the hackathon at PriceLine a few months back. After seeing PriceLine's workspace as well as meeting their engineers including Taffy and Maedeh, I knew that PriceLine would be a great fit for me. I saw an open position for both front-end and immediately decided to reach out and apply. I love working with your tech stack and have completed several fullstack projects using them. </p>
            <p>I graduated from Fullstack 3 months ago and I am currently a Software Engineer at SploreGuide, a tourism marketplace startup. I'm currently working on building out their Web and Mobile apps using React, React-Native, MongoDB, Apollo-Express, and GraphQL. </p>
            <p>Prior to programming, I graduated from Binghamton University with a double degree in Economics and Sociology, and a minor in Chinese Studies. After attempting to innovate ride-sharing among college students with a web app in college, I became hooked into world of software development.</p>
        </div>
        <span className="image"><img src={pic01} alt="" /></span>
      </div>
      </section>

      <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
            <li>
                <span className="icon major style1 fa-car"></span>
                <h3>BayRide</h3>
                <p>A ride-sharing mobile app where drivers can bid on pickup requests for lower ride prices</p>
                <h6>Javascript, React-Native, Google Firestore, Google Maps API, Node.js
                </h6>
              </li>
              <li>
                <span className="icon major style1 fa-car"></span>
                <h3>ParkuPied</h3>
                <p>A​ crowd-sourced mobile parking application matching parkers and open spots</p>
                <h6>Javascript, React-Native, Google Firestore, Google Maps API, Node.js
                </h6>
              </li>
              <li>
                <span className="icon major style3 fa-link"></span>
                <h3>BitVote</h3>
                <p>A quadratic-voting application powered on the Ethereum Blockchain</p>
                <h6>Javascript, Node.js, React, Solidity, Web3
                </h6>
              </li>
              <li>
                <span className="icon major style5 fa-cart-plus"></span>
                <h3>We-sell-things</h3>
                <p>E-commerce platform for selling a collection of miscellaneous novelty items</p>
                <h6>JavaScript, Node.js, React-Redux, PostgreSQL, Sequelize, Express, Git, HTML, CSS, Stripe
                </h6>
              </li>
              <li>
                <span className="icon major style5 fa-tint"></span>
                <h3>FishGarde</h3>
                <p>
                2nd Place Hackathon project - chatbot/mobile app relaying info
                 scraped from the DEC on fishing seasons, endangered species, and fish size restrictions.</p>
                 <h6>Javascript, Node.js, Twilio API
                </h6>
              </li>

            </ul>
            <footer className="major"/>
          </section>

    <section id="second" className="main special">
      <header className="major">
        <h2>When I'm not coding, you can find me...</h2>
      </header>
      <ul className="statistics">
        <li className="style1">
          <span className="icon fa-hand-rock-o"></span>
          <br/> Grappling/Brazilian <br/> Jiu-Jitsu
      </li>
        <li className="style2">
          <span className="icon fa-language"></span>
          <br/> Learning New Languages
        </li>
        <li className="style3">
          <span className="icon fa-music"></span>
          <br/> Playing Music
        </li>
        <li className="style4">
          <span className="icon fa-anchor"></span>
          <br/> Fishing
        </li>
      </ul>

      <footer className="major">
      </footer>
    </section>

    <section id="cta" className="main special">
      <header className="major">
        <h2>Resume</h2>
        <p>Click to View</p>
      </header>
      <footer className="major">
        <ul className="actions">
          <li><Link to="/resume" className="button special">View</Link></li>
         {/* <li><a href="../assets/images/Bryan_Edison_Resume.jpg" download className="button">Download</a></li> */}
        </ul>
      </footer>
    </section>

      </div>
      </div>
    )
  }
}

export default PriceLine

export const pageQuery = graphql`
  query PLQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
