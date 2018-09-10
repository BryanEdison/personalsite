import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/hackathon.jpg'

class Generic extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h1>About</h1>
            <p></p>
            <p>During college, I came to realize my love for the humanities, and so I decided that Economics and Sociology would be great majors for me to study. Around this time, I made the decision to study Mandarin as a third language and eventually, I went to study abroad in Shanghai at Fudan University. </p>
            <p> Upon a trip to Mexico with a flight booked to the wrong airport, I discovered a ride-sharing platform which saved me from missing my flight. Shortly thereafter, I began thinking about possible approaches to implementing a ride-sharing program at my university.</p>
            <p> While implementing a similar platform at my school on a site built on PHP, I discovered the necessity of having programming skills in the 21st century. During my first job out of college in the solar energy industry, I dropped everything, enrolled myself in a Bootcamp program, began studying Javascript and never looked back.</p>
          </section>
        </div>

      </div>
    )
  }
}

export default Generic

export const pageQuery = graphql`
  query GenericQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
