import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/me.jpg'

class Index extends React.Component {
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

        <Header />

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
                  <h2>Origins</h2>
                </header>
                <p>After building a ride-sharing platform for an entrepreneurship class project in college, I gained an appreciation and fascination for programming.</p>

                <p>I graduated from Binghamton University and double majored in Economics and Sociology, with a minor in Chinese Studies. After briefly working in the renewable energy sector, I took the plunge into the world of web development and couldn't be happier.</p>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/about" className="button">More About Me</Link></li>
              </ul>
            </footer>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-car"></span>
                <h3>ParkuPied</h3>
                <p>A crowd-sourced mobile parking application. This application allows people to give up or look for parking spots in the cities, matching users with closest parkers/spots.</p>
              </li>
              <li>
                <span className="icon major style3 fa-link"></span>
                <h3>BitVote</h3>
                <p>BitVote is a quadratic-voting application powered on the Ethereum Blockchain. Users can vote on different elections through intensity of preferences as opposed to our current one person, one vote system. </p>
              </li>
              <li>
                <span className="icon major style5 fa-cart-plus"></span>
                <h3>We-sell-things</h3>
                <p>An e-commerce platform for selling out of the ordinary and impractical things.</p>
              </li>
              <li>
                <span className="icon major style5 fa-tint"></span>
                <h3>FishGarde</h3>
                <p>A chatbot/mobile app, developed over a 2 day hackathon, which scraped information from the DEC and alerted recreational fishers on fishing seasons, endangered species, and fish size restrictions.</p>
              </li>

            </ul>
            <footer className="major">
             {/* <ul className="actions">
                <li><Link to="/generic" className="button">More Projects</Link></li>
    </ul> */}
            </footer>
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

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
