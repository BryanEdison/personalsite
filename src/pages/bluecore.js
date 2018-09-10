import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../components/Header';


class BlueCore extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
      <Header/>
        <div id="main">

            <h1>Hey BlueCore</h1>
            <p>I'm sincerely interested in working for you. I missed to formally meet you Fullstack's launch day but I hope that's not a deterrent in applying. It was still great meeting you John and Andrew!</p>
            <p>I graduated from Fullstack 3 months ago am currently a Software Engineer at SploreGuide, a tourism marketplace startup. I'm currently working on building out their React/React-Native front-end and integrating it with their MongoDB/GraphQL backend. </p>
        </div>

      </div>
    )
  }
}

export default BlueCore

export const pageQuery = graphql`
  query BlueCoreQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
